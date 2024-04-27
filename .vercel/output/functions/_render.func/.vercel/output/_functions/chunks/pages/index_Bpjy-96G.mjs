/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_ByAMBqYn.mjs';
import 'kleur/colors';
import 'html-escaper';
import { u as updateQuantity, c as cartItems, $ as $$Layout, s as supabaseClient } from './_id__BEvm8X-d.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import 'clsx';
import { $ as $$Image } from './generic_oWe5VsDv.mjs';

const CartItem = ({ item }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center md:gap-8", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: item.image,
        alt: item.name,
        width: 48,
        height: 48,
        className: "rounded-lg"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-row items-center justify-between text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-lg font-semibold sm:text-xl md:text-2xl", children: item.name }),
      /* @__PURE__ */ jsxs("div", { className: "space-between flex h-full w-fit flex-row", children: [
        /* @__PURE__ */ jsx("div", { className: "mr-5  flex flex-col items-center", children: /* @__PURE__ */ jsxs("div", { className: "text-md flex items-center", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                updateQuantity(item.id, item.quantity - 1);
              },
              className: "mr-2 ",
              children: "-"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: " text-center text-sm", children: item.quantity }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                updateQuantity(item.id, item.quantity + 1);
              },
              className: "ml-2 ",
              children: "+"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-6", children: /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
          item.price,
          " ",
          item.currency
        ] }) })
      ] })
    ] })
  ] });
};

const CartList = ({ items }) => {
  return /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:gap-8", children: items.map((item, index) => /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(CartItem, { item }),
    index !== items.length - 1 && /* @__PURE__ */ jsx("div", { className: "w-full border-t shadow-md dark:border-gray-800" })
  ] })) });
};

const Cart = () => {
  const [items, setItems] = useState(cartItems.get());
  useEffect(() => {
    const unsubscribe = cartItems.subscribe((value) => {
      setItems(value);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  console.log("ITEMS, ", items);
  console.log("TOTAL PRICE", totalPrice);
  console.log("TOTAL QUANTITY", totalQuantity);
  return /* @__PURE__ */ jsx("div", { className: "mx-auto flex max-w-6xl flex-col items-start gap-4 p-4 md:flex-row md:gap-8", children: /* @__PURE__ */ jsx("div", { className: "mt-6 grid w-full gap-4", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "bg-card text-card-foreground rounded-lg border shadow-sm",
      "data-v0-t": "card",
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-1.5 p-6 md:flex-row md:items-center md:gap-4", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-row justify-between", children: [
          /* @__PURE__ */ jsx("h3", { className: "whitespace-nowrap text-2xl font-semibold leading-none tracking-tight", children: "Shopping Cart" }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-sm", children: [
            "You have ",
            totalQuantity,
            " items in your cart"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx(CartList, { items }),
          " "
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "hover:text-primary/80 duration-250 transition-colors",
              href: "/products",
              children: /* @__PURE__ */ jsxs("button", { className: "ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground mt-8 inline-flex h-11 items-center justify-center whitespace-nowrap rounded-md border px-6 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", children: [
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "mr-2 h-4 w-4",
                    children: /* @__PURE__ */ jsx("path", { d: "m15 18-6-6 6-6" })
                  }
                ),
                "Continue shopping"
              ] })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end", children: [
            /* @__PURE__ */ jsxs("p", { className: "mb-1 text-lg", children: [
              "Total SEK ",
              totalPrice.toFixed(2)
            ] }),
            /* @__PURE__ */ jsx("button", { className: "ring-offset-background focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 mt-2 inline-flex h-11 items-center justify-center whitespace-nowrap rounded-md px-6 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:ml-4 md:mt-0", children: "Proceed to checkout" })
          ] })
        ] })
      ]
    }
  ) }) });
};

const $$Astro$4 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Astro e-commerce cart" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex min-h-[calc(100vh-64px)] flex-col"> ${renderComponent($$result2, "Cart", Cart, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/erik/examensarbete/e-commerce-astro/src/components/Cart", "client:component-export": "default" })} </main> ` })}`;
}, "/Users/erik/examensarbete/e-commerce-astro/src/pages/cart/index.astro", void 0);

const $$file$2 = "/Users/erik/examensarbete/e-commerce-astro/src/pages/cart/index.astro";
const $$url$2 = "/cart";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$ProductCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const { product } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="flex outline-none focus:outline-none"${addAttribute(`/products/${product.id}`, "href")}> <div class="bg-card text-card-foreground w-64 transform rounded-lg border shadow-sm transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg" data-v0-t="card"> <img${addAttribute(product.image, "src")}${addAttribute(product.name, "alt")} class="h-64 w-full rounded-t-lg object-cover" width="200" height="200"> <div class="p-6"> <h2 class="text-lg font-semibold">${product.name}</h2> <p class="text-gray-500">${product.description}</p> <div class="mt-4 flex items-center justify-between"> <span class="text-xl font-bold">${` ${product.price} ${product.currency}`}</span> <div${addAttribute(`h-4 w-4 rounded-full ${product.stock > 0 ? "bg-green-500" : "bg-red-500"}`, "class")}></div> </div> </div> </div> </a>`;
}, "/Users/erik/examensarbete/e-commerce-astro/src/components/ProductCard.astro", void 0);

const $$Astro$2 = createAstro();
const $$Products = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Products;
  const { data: products, error } = await supabaseClient.from("products").select("*");
  if (error) {
    console.error("Error fetching products:", error.message);
  }
  return renderTemplate`${maybeRenderHead()}<div class="flex w-full items-center justify-center p-12"> <div class="grid grid-cols-1 gap-10 md:grid-cols-4"> ${products && products.map((product) => renderTemplate`${renderComponent($$result, "ProductCard", $$ProductCard, { "key": product.id, "product": product })}`)} </div> </div>`;
}, "/Users/erik/examensarbete/e-commerce-astro/src/components/Products.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Astro e-commerce products" }, { "default": ($$result2) => renderTemplate` <title>Products</title> ` })} ${maybeRenderHead()}<main class="flex min-h-[calc(100vh-64px)] flex-col items-center"> ${renderComponent($$result, "Products", $$Products, {})} </main> `;
}, "/Users/erik/examensarbete/e-commerce-astro/src/pages/products/index.astro", void 0);

const $$file$1 = "/Users/erik/examensarbete/e-commerce-astro/src/pages/products/index.astro";
const $$url$1 = "/products";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const ProductImage = new Proxy({"src":"/_astro/produkt.CPQfVaWv.jpeg","width":640,"height":800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/erik/examensarbete/e-commerce-astro/public/produkt.jpeg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Astro e-commerce" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex min-h-[calc(100vh-64px)] flex-col"> <section class="w-full py-6 md:py-12 lg:py-16 xl:py-24"> <div class="container px-4 md:px-6"> <div class="flex flex-row items-center justify-center gap-6 lg:flex-row-reverse lg:gap-12"> ${renderComponent($$result2, "Image", $$Image, { "src": ProductImage, "class": "", "width": 400, "alt": "Product" })} <div class="flex flex-col justify-center space-y-4"> <div class="space-y-2"> <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
Spring Collection
</h1> <p class="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
Introducing the latest styles for the season. Embrace comfort
                   and elegance with our hand-picked selection.
</p> </div> <div class="flex flex-col gap-2 min-[600px]:flex-row"> <a class="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300" href="/products">
Explore
</a> </div> </div> </div> </div> </section> </main> ` })}`;
}, "/Users/erik/examensarbete/e-commerce-astro/src/pages/index.astro", void 0);

const $$file = "/Users/erik/examensarbete/e-commerce-astro/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };
