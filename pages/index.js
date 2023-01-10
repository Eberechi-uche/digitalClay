import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Nav from "../component/nav";
import { getSortedPostsData } from "../lib/post";
import Layout from "../component/layout";
import ArticleContainer from "../component/ArticleContainer";
import Articles from "../component/Articles";

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
      <Nav
        first={"digitalClay"}
        center={true}
        state={"recent"}
        end={"music"}
      ></Nav>
      <h1>Blogs</h1>
      <hr />
      <Layout>
        <ArticleContainer>
          {allPostsData.map(({ id, date, title, brief }) => (
            <Articles key={id} header={title} brief={brief}></Articles>
          ))}
        </ArticleContainer>
      </Layout>
    </div>
  );
}
