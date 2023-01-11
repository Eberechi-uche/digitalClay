import Nav from "../component/nav";
import Layout from "../component/layout";
import { Articles, ArticleContainer } from "../component/Articles";
import { getSortedPostsData } from "../lib/post";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <>
      <Nav first={"home"} third={"Event"}></Nav>
      <h1>Blogs</h1>
      <hr></hr>
      <Layout>
        <ArticleContainer>
          {allPostsData.map(({ id, date, title, brief }) => (
            <Articles key={id} header={title} brief={brief}></Articles>
          ))}
        </ArticleContainer>
      </Layout>
    </>
  );
}
