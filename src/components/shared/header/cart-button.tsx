"use client";
import React from "react";
import Link from "../link/Link";
import { ShoppingCart } from "lucide-react";
import { Routes } from "@/constants/enums";
import { useAppSelector } from "@/Redux/hooks";
import { selectCartItems } from "@/Redux/features/cartSlice";
import { getCartQuantity } from "@/lib/cart";

export default function CartButton() {
  const cart = useAppSelector(selectCartItems);

  const cartQuantity = getCartQuantity(cart);
  return (
    <Link
      className="flex relative
      items-center flex-col"
      href={`/${Routes.CART}`}
    >
      <span className="absolute -top-4 start-4 w-5 h-5 text-sm bg-primary rounded-full text-white text-center">
        {cartQuantity}
      </span>
      <ShoppingCart
        className={`text-accent group-hover:text-primary duration-200 transition-colors !w-6 !h-6`}
      />
    </Link>
  );
}
