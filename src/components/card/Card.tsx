import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>2023.09.13 - </span>
          <span className={styles.category}>Coding</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          debitis odio asperiores amet architecto doloremque saepe, rerum nulla
          minus laudantium accusantium est enim unde repellendus quam et labore,
          inventore perferendis?
        </p>
        <Link href="/" className={styles.link}>
          더보기
        </Link>
      </div>
    </div>
  );
};

export default Card;
