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

export default function AddToCard({ item }: { item: ProductWithRelations }) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className={"main-button my-4"}>Add to Cart</Button>
        </DialogTrigger>
        <DialogContent className="max-w-[425px] max-h-[70vh] overflow-y-auto">
          <DialogHeader className="flex  flex-col gap-2 justify-center items-center">
            <DialogTitle className="relative w-[200px] h-[200px] ">
              <Image
                src={item.image}
                fill
                className="object-cover"
                alt={item.id}
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
            <PickSize item={item} />
          </div>
          <h2 className="text-secondary-foreground  capitalize font-bold text-xl text-center">
            Extras
          </h2>
          <div>
            <Extras item={item} />
          </div>
          <DialogFooter>
            <Button type="submit" className="main-button  w-full">
              Add To Cart
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export function PickSize({ item }: { item: ProductWithRelations }) {
  return (
    <RadioGroup defaultValue="comfortable">
      {item.size.map((size) => {
        return (
          <div
            key={size.id}
            className="flex items-center space-x-2 border border-gray-100 rounded-md p-4"
          >
            <RadioGroupItem value="default" id={size.id} />
            <Label htmlFor={size.id}>
              {size.name} {formatCurrency(item.basePrice + size.price)}
            </Label>
          </div>
        );
      })}
    </RadioGroup>
  );
}

export function Extras({ item }: { item: ProductWithRelations }) {
  return (
    <RadioGroup defaultValue="comfortable">
      {item.extras.map((extra) => {
        return (
          <div
            className="flex items-center space-x-2 border border-gray-100 rounded-md p-4"
            key={extra.id}
          >
            <Checkbox id={extra.id} />
            <Label htmlFor={extra.id}>{extra.name}</Label>
          </div>
        );
      })}
    </RadioGroup>
  );
}
