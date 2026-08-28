export type NewsArticle = {
  id: string;
  title: string;
  date: string;
  href: string;
  category: string;
  image?: string;
  gradient: string;
  featured?: boolean;
};

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "1",
    title: "FRUITY INC OPENS ITS CREATOR HOUSE IN LOS ANGELES",
    date: "10_08_2026",
    href: "/news/creator-house-launch",
    category: "CREATOR HOUSE",
    featured: true,
    gradient:
      "linear-gradient(160deg, #1e3a5f 0%, #0f172a 45%, #334155 100%)",
  },
  {
    id: "2",
    title: "NEW CREATORS JOIN THE FRUITY INC HOUSE",
    date: "10_08_2026",
    href: "/news/new-creators",
    category: "CREATOR HOUSE",
    gradient:
      "linear-gradient(160deg, #312e81 0%, #1e1b4b 50%, #4338ca 100%)",
  },
  {
    id: "3",
    title: "WELCOME TO THE HOUSE – A NEW CHAPTER BEGINS",
    date: "10_08_2026",
    href: "/news/welcome-to-the-house",
    category: "CREATOR HOUSE",
    gradient:
      "linear-gradient(160deg, #1c1917 0%, #292524 50%, #44403c 100%)",
  },
  {
    id: "4",
    title: "THANK YOU FOR AN INCREDIBLE FIRST SEASON",
    date: "10_08_2026",
    href: "/news/first-season",
    category: "CREATOR HOUSE",
    gradient:
      "linear-gradient(160deg, #134e4a 0%, #042f2e 50%, #115e59 100%)",
  },
];
