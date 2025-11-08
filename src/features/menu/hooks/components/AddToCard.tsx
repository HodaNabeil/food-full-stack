"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { formatCurrency } from "@/lib/formatters";
import { Checkbox } from "@/components/ui/checkbox";
import { ProductWithRelations } from "@/types/product";
import { useState } from "react";
import { Extra, ProductSizes, Size } from "@prisma/client";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import {
  addCartItem,
  removeCartItem,
  removeItemFromCart,
  selectCartItems,
} from "@/Redux/features/cartSlice";
import { getItemQuantity } from "@/lib/cart";

export default function AddToCard({ item }: { item: ProductWithRelations }) {
  const cart = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();

  const quantity = getItemQuantity(item.id, cart);

  const defaultSize =
    cart.find((el) => el.id === item.id)?.size ||
    item.size.find((size) => size.name === ProductSizes.SMALL);

  const defaultExtras = cart.find((el) => el.id === item.id)?.extras || [];

  const [selectedSize, setselectedSize] = useState<Size>(defaultSize!);
  const [selectedExtras, setselectedExtras] = useState<Extra[]>(defaultExtras!);
  let totalPrice = item.basePrice;

  if (selectedSize) {
    totalPrice += selectedSize.price;
  }
  if (selectedExtras.length > 0) {
    for (const extra of selectedExtras) {
      totalPrice += extra.price;
    }
  }

  const handleAddToCart = () => {
    dispatch(
      addCartItem({
        basePrice: item.basePrice,
        id: item.id,
        image: item.image,
        name: item.name,
        size: selectedSize,
        extras: selectedExtras,
      })
    );
  };

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className={"main-button my-4"}>Add to Cart</Button>
        </DialogTrigger>
        <DialogContent className="max-w-[425px] max-h-[70vh] overflow-y-auto">
          <DialogHeader className="flex  flex-col gap-2 justify-center items-center">
            <DialogTitle className="relative w-[200px] h-[200px]  ">
              <Image
                src={item.image}
                fill
                className="object-cover "
                alt={item.id}
                style={{ borderRadius: "4px" }}
              />
            </DialogTitle>
            <span className="font-black text-xl capitalize  text-foreground">
              {" "}
              {item.name}
            </span>

            <DialogDescription className="text-secondary-foreground  capitalize">
              {item.description}
            </DialogDescription>
          </DialogHeader>
          <h2 className="text-secondary-foreground  capitalize font-bold text-xl text-center">
            Pick Your Size
          </h2>

          <div>
            <PickSize
              item={item}
              selectedSize={selectedSize}
              setselectedSize={setselectedSize}
            />
          </div>
          <h2 className="text-secondary-foreground  capitalize font-bold text-xl text-center">
            Extras
          </h2>
          <div>
            <Extras
              item={item}
              selectedExtras={selectedExtras}
              setSelectedExtras={setselectedExtras}
            />
          </div>
          <DialogFooter>
            {quantity > 0 ? (
              <ChooseQuantity
                quantity={quantity}
                item={item}
                selectedExtras={selectedExtras}
                selectedSize={selectedSize}
                quantity={quantity}
              />
            ) : (
              <Button
                type="submit"
                className="main-button  w-full"
                onClick={handleAddToCart}
              >
                Add To Cart {formatCurrency(totalPrice)}
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export function PickSize({
  item,
  selectedSize,
  setselectedSize,
}: {
  item: ProductWithRelations;
  selectedSize: Size;
  setselectedSize: React.Dispatch<React.SetStateAction<Size>>;
}) {
  return (
    <RadioGroup defaultValue="comfortable">
      {item.size.map((size) => {
        return (
          <div
            key={size.id}
            className="flex items-center space-x-2 border border-gray-100 rounded-md p-4"
          >
            <RadioGroupItem
              onClick={() => setselectedSize(size)}
              value={selectedSize.name}
              id={size.id}
              checked={size.id === selectedSize.id}
            />
            <Label htmlFor={size.id}>
              {size.name} {formatCurrency(item.basePrice + size.price)}
            </Label>
          </div>
        );
      })}
    </RadioGroup>
  );
}

export function Extras({
  item,
  selectedExtras,
  setSelectedExtras,
}: {
  item: ProductWithRelations;

  selectedExtras: Extra[];
  setSelectedExtras: React.Dispatch<React.SetStateAction<Extra[]>>;
}) {
  const handleExtra = (extra: Extra) => {
    if (selectedExtras.find((el) => el.id === extra.id)) {
      const filteredExtras = selectedExtras.filter((el) => el.id !== extra.id);
      setSelectedExtras(filteredExtras);
    } else {
      setSelectedExtras([...selectedExtras, extra]);
    }
  };
  return (
    <RadioGroup defaultValue="comfortable">
      {item.extras.map((extra) => {
        return (
          <div
            className="flex items-center space-x-2 border border-gray-100 rounded-md p-4"
            key={extra.id}
          >
            <Checkbox
              id={extra.id}
              onClick={() => handleExtra(extra)}
              checked={Boolean(selectedExtras.find((el) => el.id === extra.id))}
            />
            <Label htmlFor={extra.id}>
              {extra.name} {formatCurrency(item.basePrice + extra.price)}
            </Label>
          </div>
        );
      })}
    </RadioGroup>
  );
}

function ChooseQuantity({
  item,
  quantity,
  selectedExtras,
  selectedSize,
}: {
  item: ProductWithRelations;
  quantity: number;
  selectedExtras: Extra[];
  selectedSize: Size;
}) {
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center flex-col gap-2 mt-4 w-full">
      <div className="flex items-center justify-center gap-3 lg:gap-9">
        <Button
          variant="outline"
          onClick={() => dispatch(removeCartItem({ id: item.id }))}
          className="hover:bg-white  border-gray-300 border-1   !cursor-pointer"
        >
          -
        </Button>
        <div>
          <span className="text-black"> {quantity}</span>
        </div>
        <Button
          className="hover:bg-white  border-gray-300 border-1   !cursor-pointer"
          s
          variant="outline"
          onClick={() =>
            dispatch(
              addCartItem({
                id: item.id,
                basePrice: item.basePrice,
                image: item.image,
                name: item.name,
                extras: selectedExtras,
                size: selectedSize,
              })
            )
          }
        >
          +
        </Button>
      </div>
      <Button
        size="sm"
        onClick={() => dispatch(removeItemFromCart({ id: item.id }))}
        className="  !cursor-pointer"
      >
        Remove
      </Button>
    </div>
  );
}
