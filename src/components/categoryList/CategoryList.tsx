import Link from "next/link";
import styles from "./categoryList.module.css";
import Image from "next/image";
import { categoryList } from "@/data";
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

const CategoryList = async () => {
  const categories: CatType = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>인기 카테고리</h1>
      <div className={styles.categories}>
        {categories.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.img}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
