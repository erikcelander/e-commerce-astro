import { type CartItemType } from "../../lib/stores/cart";

import CartItem from "./CartItem.tsx";

const CartList = ({ items }: { items: CartItemType[] }) => {
  return (
    <div className="grid gap-4 md:gap-8">
      {items.map((item, index) => (
        <div>
          <CartItem item={item} />
          {index !== items.length - 1 && (
            <div className="w-full border-t shadow-md dark:border-gray-800"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CartList;
