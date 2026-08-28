export type FeaturedCard = {
  title: string;
  href: string;
  image?: string;
  gradient: string;
};

export type Product = {
  id: string;
  title: string;
  href: string;
  gradient: string;
};

export const FEATURED_CARDS: FeaturedCard[] = [
  {
    title: "ABOUT FRUITY INC",
    href: "/about",
    gradient:
      "linear-gradient(160deg, #1a2a4a 0%, #0d1520 40%, #1e3a5f 100%)",
  },
  {
    title: "| FIRST LIGHT – NEW COLLECTION",
    href: "/collection/first-light",
    gradient:
      "linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 50%, #151515 100%)",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "FIRST LIGHT T-SHIRT BLACK: BORN UNDER THE SAME ROOF",
    href: "/shop/first-light-tshirt-black",
    gradient: "linear-gradient(180deg, #d4d4d8 0%, #a1a1aa 55%, #c4b5fd 100%)",
  },
  {
    id: "2",
    title: "FIRST LIGHT T-SHIRT WHITE: BORN UNDER THE SAME ROOF",
    href: "/shop/first-light-tshirt-white",
    gradient: "linear-gradient(180deg, #e4e4e7 0%, #d4d4d8 55%, #ddd6fe 100%)",
  },
  {
    id: "3",
    title: "FIRST LIGHT HOODIE BLACK: BORN UNDER THE SAME ROOF",
    href: "/shop/first-light-hoodie-black",
    gradient: "linear-gradient(180deg, #d4d4d8 0%, #a1a1aa 55%, #c4b5fd 100%)",
  },
  {
    id: "4",
    title: "FIRST LIGHT HOODIE WHITE: BORN UNDER THE SAME ROOF",
    href: "/shop/first-light-hoodie-white",
    gradient: "linear-gradient(180deg, #e4e4e7 0%, #d4d4d8 55%, #ddd6fe 100%)",
  },
];
