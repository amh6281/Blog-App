import CardList from "@/components/cardList/CardList";
import styles from "./home.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
      </div>
    </div>
  );
}
