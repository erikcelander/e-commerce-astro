import { useEffect, useState } from "react";
import CartList from "./CartList.tsx";
import { cartItems } from "../../lib/stores/cart";

const Cart = () => {
  const [items, setItems] = useState(cartItems.get());

  useEffect(() => {
    const unsubscribe = cartItems.subscribe((value: any) => {
      setItems(value);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  console.log("ITEMS, ", items);
  console.log("TOTAL PRICE", totalPrice);
  console.log("TOTAL QUANTITY", totalQuantity);
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 p-4 md:flex-row md:gap-8">
      <div className="mt-6 grid w-full gap-4">
        <div
          className="bg-card text-card-foreground rounded-lg border shadow-sm"
          data-v0-t="card"
        >
          <div className="flex flex-col space-y-1.5 p-6 md:flex-row md:items-center md:gap-4">
            <div className="flex w-full flex-row justify-between">
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                Shopping Cart
              </h3>
              <p className="text-muted-foreground text-sm">
                You have {totalQuantity} items in your cart
              </p>
            </div>
          </div>
          <div className="p-6">
            <CartList items={items} />{" "}
          </div>
          <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
            <a
              className="hover:text-primary/80 duration-250 transition-colors"
              href="/products"
            >
              <button className="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground mt-8 inline-flex h-11 items-center justify-center whitespace-nowrap rounded-md border px-6 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
                Continue shopping
              </button>
            </a>
            <div className="flex flex-col items-end">
              <p className="mb-1 text-lg">Total SEK {totalPrice.toFixed(2)}</p>
              <button className="ring-offset-background focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 mt-2 inline-flex h-11 items-center justify-center whitespace-nowrap rounded-md px-6 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:ml-4 md:mt-0">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
