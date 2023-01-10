import Link from "next/link";
import Head from "next/head";
import Layout from "../../component/layout";
import Nav from "../../component/nav";
import Articles from "../../component/Articles";
import ArticleContainer from "../../component/ArticleContainer";

function FirstPost() {
  return (
    <>
      <Head>
        <title> welcome to my first post</title>
      </Head>
      <Nav first={"home"} state={"reading"}></Nav>
      <h1>Recent post</h1>
      <div>
        <Layout>
          <ArticleContainer>
            <Articles title={"click counter the making"}></Articles>
            <Articles title={"prgraming as a service"}></Articles>
            <Articles title={"irrational thought"}></Articles>
          </ArticleContainer>
        </Layout>
      </div>
    </>
  );
}

export default FirstPost;
