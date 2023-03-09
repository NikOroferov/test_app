import MyLink from "@/components/MyLink";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Which Teletubby Are You?</h1>
      <p>Answer the questions to find out which teletubby you are</p>
      <MyLink path="/question">Start quiz</MyLink>
    </main>
  );
}
