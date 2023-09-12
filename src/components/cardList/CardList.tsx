import Image from "next/image";
import styles from "./cardList.module.css";
import Card from "../card/Card";

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>최근 게시물</h1>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardList;
