import Link from "next/link";
import styles from "./menuCategories.module.css";
import { CatType } from "@/types/types";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("실패");
  }
  return res.json();
};

const MenuCategories = async () => {
  const categories: CatType = await getData();

  return (
    <div className={styles.categoryList}>
      {categories.map((item) => (
        <Link
          href={`/blog?cat=${item.slug}`}
          className={`${styles.categoryItem} ${styles[item.slug]}`}
          key={item._id}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default MenuCategories;
