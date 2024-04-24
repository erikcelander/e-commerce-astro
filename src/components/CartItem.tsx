import React, { useEffect, useState } from "react";
import { type CartItemType } from "../../lib/stores/cart";
import { updateQuantity } from "../../lib/stores/cart";

//import CartItem from "./CartItem.astro";

const CartItem = ({ item }: { item: CartItemType }) => {
  return (
    <div className="flex items-center md:gap-8">
      <img
        src={item.image}
        alt={item.name}
        width={48}
        height={48}
        className="rounded-lg"
      />
      <div className="flex w-full flex-row items-center justify-between text-center">
        <h1 className="text-lg font-semibold sm:text-xl md:text-2xl">
          {item.name}
        </h1>
        <div className="space-between flex h-full w-fit flex-row">
          <div className="mr-5  flex flex-col items-center">
            <div className="text-md flex items-center">
              <button
                onClick={() => {
                  updateQuantity(item.id, item.quantity - 1);
                }}
                className="mr-2 "
              >
                -
              </button>
              <span className=" text-center text-sm">{item.quantity}</span>
              <button
                onClick={() => {
                  updateQuantity(item.id, item.quantity + 1);
                }}
                className="ml-2 "
              >
                +
              </button>
            </div>
          </div>
          <p className="text-sm leading-6">
            <span className="font-semibold">
              {item.price} {item.currency}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
