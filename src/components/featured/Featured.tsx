import Image from "next/image";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Blog App!!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" className={styles.img} alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            blanditiis modi, necessitatibus nostrum aliquid incidunt quasi ipsa
            odio quos voluptatum nemo! Molestias corporis minima, inventore cum
            odit doloremque? Magnam, reprehenderit!
          </p>
          <button className={styles.button}>더보기</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
