export type FeaturedCard = {
  title: string;
  href: string;
  image?: string;
  gradient: string;
};

export type ProductColor = {
  id: string;
  label: string;
  swatch: string;
  gradient: string;
  slug: string;
};

export type ProductDetail = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  description: string;
  sizes: string[];
  colors: ProductColor[];
  info: string[];
};

export type Product = {
  id: string;
  title: string;
  href: string;
  gradient: string;
  productId: string;
  colorId: string;
};

export const ACTIVE_SALES = ["25% OFF", "20% OFF", "15% OFF"];

export const COLLECTION_CARD: FeaturedCard = {
  title: "| FIRST LIGHT – NEW COLLECTION",
  href: "/collection/first-light",
  gradient:
    "linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 50%, #151515 100%)",
};

export const PRODUCT_DETAILS: ProductDetail[] = [
  {
    id: "first-light-tshirt",
    title: "FIRST LIGHT T-SHIRT",
    subtitle: "BORN UNDER THE SAME ROOF",
    price: "$48",
    description:
      "Heavyweight cotton tee from the First Light collection. Relaxed fit with a soft hand feel and screen-printed graphic on the chest.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      {
        id: "black",
        label: "Black",
        swatch: "#1a1a1a",
        slug: "first-light-tshirt-black",
        gradient:
          "linear-gradient(180deg, #d4d4d8 0%, #a1a1aa 55%, #c4b5fd 100%)",
      },
      {
        id: "white",
        label: "White",
        swatch: "#f5f5f5",
        slug: "first-light-tshirt-white",
        gradient:
          "linear-gradient(180deg, #e4e4e7 0%, #d4d4d8 55%, #ddd6fe 100%)",
      },
    ],
    info: [
      "100% premium cotton, 240gsm heavyweight jersey",
      "Relaxed unisex fit — size up for an oversized look",
      "Screen-printed First Light graphic on chest",
      "Machine wash cold, tumble dry low",
      "Part of the First Light collection — limited run",
    ],
  },
  {
    id: "first-light-hoodie",
    title: "FIRST LIGHT HOODIE",
    subtitle: "BORN UNDER THE SAME ROOF",
    price: "$98",
    description:
      "Oversized pullover hoodie from the First Light collection. Brushed fleece interior with kangaroo pocket and embroidered logo.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      {
        id: "black",
        label: "Black",
        swatch: "#1a1a1a",
        slug: "first-light-hoodie-black",
        gradient:
          "linear-gradient(180deg, #d4d4d8 0%, #a1a1aa 55%, #c4b5fd 100%)",
      },
      {
        id: "white",
        label: "White",
        swatch: "#f5f5f5",
        slug: "first-light-hoodie-white",
        gradient:
          "linear-gradient(180deg, #e4e4e7 0%, #d4d4d8 55%, #ddd6fe 100%)",
      },
    ],
    info: [
      "80% cotton / 20% polyester fleece, 380gsm",
      "Oversized fit with dropped shoulders",
      "Embroidered First Light logo on chest",
      "Kangaroo pocket and ribbed cuffs & hem",
      "Part of the First Light collection — limited run",
    ],
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "FIRST LIGHT T-SHIRT BLACK: BORN UNDER THE SAME ROOF",
    href: "/shop/first-light-tshirt-black",
    gradient: "linear-gradient(180deg, #d4d4d8 0%, #a1a1aa 55%, #c4b5fd 100%)",
    productId: "first-light-tshirt",
    colorId: "black",
  },
  {
    id: "2",
    title: "FIRST LIGHT T-SHIRT WHITE: BORN UNDER THE SAME ROOF",
    href: "/shop/first-light-tshirt-white",
    gradient: "linear-gradient(180deg, #e4e4e7 0%, #d4d4d8 55%, #ddd6fe 100%)",
    productId: "first-light-tshirt",
    colorId: "white",
  },
  {
    id: "3",
    title: "FIRST LIGHT HOODIE BLACK: BORN UNDER THE SAME ROOF",
    href: "/shop/first-light-hoodie-black",
    gradient: "linear-gradient(180deg, #d4d4d8 0%, #a1a1aa 55%, #c4b5fd 100%)",
    productId: "first-light-hoodie",
    colorId: "black",
  },
  {
    id: "4",
    title: "FIRST LIGHT HOODIE WHITE: BORN UNDER THE SAME ROOF",
    href: "/shop/first-light-hoodie-white",
    gradient: "linear-gradient(180deg, #e4e4e7 0%, #d4d4d8 55%, #ddd6fe 100%)",
    productId: "first-light-hoodie",
    colorId: "white",
  },
];

export function getProductBySlug(slug: string) {
  for (const product of PRODUCT_DETAILS) {
    const color = product.colors.find((c) => c.slug === slug);
    if (color) {
      return { product, activeColor: color };
    }
  }
  return null;
}

export function getAllProductSlugs() {
  return PRODUCT_DETAILS.flatMap((product) =>
    product.colors.map((color) => color.slug),
  );
}
