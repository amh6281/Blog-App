import styles from "./loginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton}>구글 로그인</div>
        <div className={styles.socialButton}>깃허브 로그인</div>
        <div className={styles.socialButton}>페이스북 로그인</div>
      </div>
    </div>
  );
};

export default LoginPage;
