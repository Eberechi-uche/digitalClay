import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Nav from "../component/nav";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>home</title>
      </Head>
      <Nav
        first={"digitalClay"}
        center={true}
        state={"recent"}
        end={"music"}
      ></Nav>
      <p>welcome to digital-clay</p>
      <Link href="post/first-post">Posts</Link>
    </div>
  );
}
