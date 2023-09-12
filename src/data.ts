type Category = {
  id: number;
  title: string;
  slug: string;
  img?: string;
};

type CategoryList = Category[];

export const categoryList: CategoryList = [
  {
    id: 1,
    title: "style",
    slug: "style",
    img: "/style.png",
  },
  {
    id: 2,
    title: "fashion",
    slug: "fashion",
    img: "/fashion.png",
  },
  {
    id: 1,
    title: "food",
    slug: "food",
    img: "/food.png",
  },
  {
    id: 1,
    title: "culture",
    slug: "culture",
    img: "/culture.png",
  },
  {
    id: 1,
    title: "coding",
    slug: "coding",
    img: "/coding.png",
  },
];
