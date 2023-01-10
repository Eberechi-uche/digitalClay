import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Nav from "../component/nav";
import { getSortedPostsData } from "../lib/post";
import Layout from "../component/layout";
import ArticleContainer from "../component/ArticleContainer";
import Articles from "../component/Articles";

export async function getStaticProps() {
  const allPostData = getSortedPostsData();
  return {
    props: {
      allPostData,
    },
  };
}

export default function Home({ allPostData }) {
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
      <Layout>
        <ArticleContainer>
          {allPostData.map(({ id, date, title }) => (
            <Articles key={id} header={title}></Articles>
          ))}
        </ArticleContainer>
      </Layout>
    </div>
  );
}
