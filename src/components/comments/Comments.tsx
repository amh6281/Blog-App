import Image from "next/image";
import styles from "./comments.module.css";
import Link from "next/link";

const Comments = () => {
  const status = "authenticated";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>댓글</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="댓글을 입력해주세요 :)"
            className={styles.input}
          />
          <button className={styles.button}>등록</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>2023.09.16</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            adipisci ut possimus voluptatibus quis officiis facere accusantium,
            mollitia est eligendi aperiam maxime, nostrum nobis dicta saepe
            quaerat facilis vero illo?
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>2023.09.16</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            adipisci ut possimus voluptatibus quis officiis facere accusantium,
            mollitia est eligendi aperiam maxime, nostrum nobis dicta saepe
            quaerat facilis vero illo?
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>2023.09.16</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            adipisci ut possimus voluptatibus quis officiis facere accusantium,
            mollitia est eligendi aperiam maxime, nostrum nobis dicta saepe
            quaerat facilis vero illo?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
