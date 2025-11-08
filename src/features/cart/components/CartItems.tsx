"use client";
import { selectCartItems } from "@/Redux/features/cartSlice";
import { useAppSelector } from "@/Redux/hooks";

import React from "react";
import CardItem from "./CartItem";
import { formatCurrency } from "@/lib/formatters";
import { deliveryFee, getSubTotal } from "@/lib/cart";

export default function CartItems() {
  const cart = useAppSelector(selectCartItems);
  const subTotal = getSubTotal(cart);
  return (
    <>
      {cart.length > 0 ? (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <CardItem key={item.id} item={item} />
              </li>
            ))}
          </ul>
          <div className="flex flex-col justify-end items-end pt-6">
            <span className="text-accent font-medium">
              Subtotal:
              <strong className="text-black">{formatCurrency(subTotal)}</strong>
            </span>
            <span className="text-accent font-medium">
              Delivery:
              <strong className="text-black">
                {formatCurrency(deliveryFee)}
              </strong>
            </span>
            <span className="text-accent font-medium">
              Total:
              <strong className="text-black">
                {formatCurrency(subTotal + deliveryFee)}
              </strong>
            </span>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-accent">Your cart is empty</p>
        </div>
      )}
    </>
  );
}
