import { persistentAtom } from "@nanostores/persistent";

export type CartItemType = {
  id: string;
  name: string;
  price: number;
  currency: string;
  quantity: number;
  image: string;
  description: string;
};

export const cartItems = persistentAtom<CartItemType[]>("cart", [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export function addToCart(product: CartItemType) {
  const currentItems = cartItems.get();
  const existingItemIndex = currentItems.findIndex(
    (item: CartItemType) => item.id === product.id,
  );

  if (existingItemIndex !== -1) {
    const updatedItems = currentItems.slice();
    updatedItems[existingItemIndex] = {
      ...updatedItems[existingItemIndex],
      quantity: updatedItems[existingItemIndex].quantity + 1,
    };
    cartItems.set(updatedItems);
  } else {
    cartItems.set([...currentItems, { ...product, quantity: 1 }]);
  }
}

export function removeFromCart(productId: string) {
  const currentItems = cartItems.get();
  const updatedItems = currentItems.filter(
    (item: CartItemType) => item.id !== productId,
  );
  cartItems.set(updatedItems);
}

export function updateQuantity(productId: string, quantity: number) {
  if (quantity === 0) {
    return removeFromCart(productId);
  }
  const currentItems = cartItems.get();
  const updatedItems = currentItems.map((item: CartItemType) =>
    item.id === productId ? { ...item, quantity: Math.max(quantity, 0) } : item,
  );
  cartItems.set(updatedItems);
}
