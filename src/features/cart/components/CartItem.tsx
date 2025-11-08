"use client";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/formatters";
import {
  CartItem,
  removeItemFromCart,
  selectCartItems,
} from "@/Redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";

export default function CardItem({ item }: { item: CartItem }) {
  const cart = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);
  return (
    <div className="     space-y-2    flex flex-col md:flex-row gap-6 justify-between">
      <div className="flex items-center gap-2">
        <div className="relative w-24 h-24  rounded-md overflow-hidden">
          <Image
            src={item.image}
            className="object-fit-cover "
            alt={item.name}
            fill
          />
        </div>
        <div>
          <h4 className="font-semibold md:text-lg">{item.name}</h4>
          <div className="relative">
            {item.size && (
              <span className="text-sm text-accent">
                Size: {item.size.name}
              </span>
            )}
            {item.extras && item.extras.length > 0 && (
              <div className="flex gap-1">
                <span>Extras:</span>
                <ul>
                  {item.extras.map((extra) => (
                    <li key={extra.id}>
                      <span className="text-sm text-accent">
                        {extra.name} {formatCurrency(extra.price)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <span className="absolute right-0 top-0 text-sm text-black">
              x{item.quantity}
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center gap-4 justify-end">
        <strong className="text-black ">
          {formatCurrency(item.basePrice)}
        </strong>
        <Button
          onClick={() => dispatch(removeItemFromCart({ id: item.id }))}
          variant="secondary"
          className="border !cursor-pointer"
        >
          <Trash2 />
        </Button>
      </div>
    </div>
  );
}
