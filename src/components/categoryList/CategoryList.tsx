import Link from "next/link";
import styles from "./categoryList.module.css";
import Image from "next/image";
import { categoryList } from "@/data";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>인기 카테고리</h1>
      <div className={styles.categories}>
        {categoryList.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item.id}
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
