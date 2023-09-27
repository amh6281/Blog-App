import Image from "next/image";
import styles from "./cardList.module.css";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import { PostType } from "@/types/types";

const getData = async (page: number) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("실패");
  }
  return res.json();
};

const CardList = async ({ page }: { page: number }) => {
  const data = await getData(page);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>최근 게시물</h1>
      <div className={styles.posts}>
        {data?.map((item: PostType) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
