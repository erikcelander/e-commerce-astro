/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderHead, h as renderSlot } from '../astro_ByAMBqYn.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsx } from 'react/jsx-runtime';
import { persistentAtom } from '@nanostores/persistent';
import { createClient } from '@supabase/supabase-js';

const $$Astro$5 = createAstro();
const $$Navmenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Navmenu;
  return renderTemplate`${maybeRenderHead()}<div class="text-primary flex w-48 flex-row justify-center gap-6"> <a class="hover:text-primary/80 duration-250 transition-colors" href="/">
home
</a> <a class="hover:text-primary/80 duration-250 transition-colors" href="/products">
products
</a> </div>`;
}, "/Users/erik/examensarbete/e-commerce-astro/src/layouts/Navmenu.astro", void 0);

const $$Astro$4 = createAstro();
const $$CartQuantity = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CartQuantity;
  return renderTemplate`${maybeRenderHead()}<div id="cart-quantity"></div> `;
}, "/Users/erik/examensarbete/e-commerce-astro/src/components/CartQuantity.astro", void 0);

const $$Astro$3 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex h-16 items-center justify-between  border-b border-primary/20 w-full`, "class")}> <div class="flex w-32 flex-initial flex-row items-center"> <h3 class="text-primary items-center pl-5 text-center text-2xl">
astro
</h3> </div> ${renderComponent($$result, "Navmenu", $$Navmenu, {})} <div class="flex items-center justify-center pr-5 text-end text-primary"> <a class="hover:text-primary/80 duration-250 transition-colors" href="/cart">
cart
</a> <div class="absolute mb-6 ml-8 text-sm"> ${renderComponent($$result, "CartQuantity", $$CartQuantity, {})} </div> </div> </div>`;
}, "/Users/erik/examensarbete/e-commerce-astro/src/layouts/Navbar.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/erik/examensarbete/e-commerce-astro/src/layouts/Layout.astro", void 0);

const cartItems = persistentAtom("cart", [], {
  encode: JSON.stringify,
  decode: JSON.parse
});
function addToCart(product) {
  const currentItems = cartItems.get();
  const existingItemIndex = currentItems.findIndex(
    (item) => item.id === product.id
  );
  if (existingItemIndex !== -1) {
    const updatedItems = currentItems.slice();
    updatedItems[existingItemIndex] = {
      ...updatedItems[existingItemIndex],
      quantity: updatedItems[existingItemIndex].quantity + 1
    };
    cartItems.set(updatedItems);
  } else {
    cartItems.set([...currentItems, { ...product, quantity: 1 }]);
  }
}
function removeFromCart(productId) {
  const currentItems = cartItems.get();
  const updatedItems = currentItems.filter(
    (item) => item.id !== productId
  );
  cartItems.set(updatedItems);
}
function updateQuantity(productId, quantity) {
  if (quantity === 0) {
    return removeFromCart(productId);
  }
  const currentItems = cartItems.get();
  const updatedItems = currentItems.map(
    (item) => item.id === productId ? { ...item, quantity: Math.max(quantity, 0) } : item
  );
  cartItems.set(updatedItems);
}

const AddToCart = ({ product }) => {
  const handleOnClick = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      currency: product.currency,
      image: product.image,
      description: product.description,
      price: product.price,
      quantity: 1
    };
    addToCart(cartItem);
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    "button",
    {
      className: "text-primary-foreground bg-foreground inline-flex h-10 w-72 items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors hover:cursor-pointer hover:bg-white/80",
      onClick: handleOnClick,
      children: "Add to cart"
    }
  ) });
};

const $$Astro$1 = createAstro();
const $$ProductPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductPage;
  const { product } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto mt-24 flex max-w-3xl gap-12"> <div class="mb-6"> <img${addAttribute(product.image, "src")}${addAttribute(product.name, "alt")} class="h-full w-96 rounded-t-lg object-cover" width="500" height="600"> </div> <div class="flex h-[450px] w-96 flex-col justify-evenly gap-6 text-center"> <div> <h1 class="mb-2 text-3xl font-bold">${product.name}</h1> <p class="mb-4">${product.description}</p> </div> <div> <span class="mb-4 block text-4xl font-bold"> ${product.price} ${product.currency} </span> ${renderComponent($$result, "AddToCart", AddToCart, { "product": product, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/erik/examensarbete/e-commerce-astro/src/components/AddToCart.tsx", "client:component-export": "default" })} </div> </div> </div>`;
}, "/Users/erik/examensarbete/e-commerce-astro/src/components/ProductPage.astro", void 0);

const supabaseUrl = "https://ndnwtshpjcwdvjptqhcp.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kbnd0c2hwamN3ZHZqcHRxaGNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzNzQ5MTYsImV4cCI6MjAyNDk1MDkxNn0.kbfX8jeFtdYL-sTLcj_TvbBoj7CA7_Rg2oDZJQSu9fs";
const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

const $$Astro = createAstro();
async function getStaticPaths() {
  const { data: products } = await supabaseClient.from("products").select("id");
  return products.map((product) => ({
    params: { id: product.id.toString() }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const { data: product } = await supabaseClient.from("products").select("*").eq("id", id).single();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Astro e-commerce product" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full flex-col items-center justify-center"> ${product && renderTemplate`${renderComponent($$result2, "ProductPage", $$ProductPage, { "product": product })}`} </div> ` })}`;
}, "/Users/erik/examensarbete/e-commerce-astro/src/pages/products/[id].astro", void 0);

const $$file = "/Users/erik/examensarbete/e-commerce-astro/src/pages/products/[id].astro";
const $$url = "/products/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _id_ as _, cartItems as c, supabaseClient as s, updateQuantity as u };
