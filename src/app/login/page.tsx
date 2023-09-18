"use client";

import { useSession, signIn } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          구글 로그인
        </div>
        <div className={styles.socialButton}>깃허브 로그인</div>
        <div className={styles.socialButton}>페이스북 로그인</div>
      </div>
    </div>
  );
};

export default LoginPage;
