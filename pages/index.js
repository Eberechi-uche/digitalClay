import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Nav from "../component/nav";
import { getSortedPostsData } from "../lib/post";
import Layout from "../component/layout";
import { Articles, ArticleContainer } from "../component/Articles";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>home</title>
      </Head>
      <Nav first={"DigitalClay"} second={"Blogs"} third={"Event"}></Nav>
      <h1>Recent</h1>
      <hr />
      <Layout>
        <p>
          Automatically self-host any Google Font. Fonts are included in the
          deployment and served from the same domain as your deployment. No
          requests are sent to Google by the browser. Import the font you would
          like to use from @next/font/google as a function. We recommend using
          variable fonts for the best performance and flexibility.
        </p>
      </Layout>
    </div>
  );
}
