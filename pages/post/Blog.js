import Nav from "../../component/nav";
import Layout from "../../component/layout";
import { Articles, ArticleContainer } from "../../component/Articles";
import { getSortedPostsData } from "../../lib/post";
import Link from "next/link";

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
      <Nav first={"home"} third={"Community"}></Nav>
      <h1>Blogs</h1>
      <hr></hr>
      <Layout>
        <ArticleContainer>
          {allPostsData.map(({ id, date, title, brief }) => (
            <Link href={`/post/${id}`}>
              <Articles
                key={id}
                header={title}
                date={date}
                brief={brief}
              ></Articles>
            </Link>
          ))}
        </ArticleContainer>
      </Layout>
    </>
  );
}
