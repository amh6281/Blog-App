import Image from "next/image";
import styles from "./cardList.module.css";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import { PostType } from "@/types/types";

const getData = async (page: number, cat: string) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-cache",
    }
  );
  if (!res.ok) {
    throw new Error("실패");
  }
  return res.json();
};

const CardList = async ({ page, cat }: { page: number; cat?: string }) => {
  if (cat === undefined) {
    cat = "";
  }

  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>최근 게시물</h1>
      <div className={styles.posts}>
        {posts?.map((item: PostType) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
