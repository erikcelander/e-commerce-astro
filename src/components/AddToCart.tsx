import { addToCart, type CartItemType } from "../../lib/stores/cart";

const AddToCart = ({ product }: { product: CartItemType }) => {
  const handleOnClick = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      currency: product.currency,
      image: product.image,
      description: product.description,
      price: product.price,
      quantity: 1,
    };

    addToCart(cartItem);
  };

  return (
    <div>
      <button
        className="text-primary-foreground bg-foreground inline-flex h-10 w-72 items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors hover:cursor-pointer hover:bg-white/80"
        onClick={handleOnClick}
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
