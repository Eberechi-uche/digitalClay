import Nav from "../component/nav";
import Layout from "../component/layout";
import { Articles, ArticleContainer } from "../component/Articles";

export default function () {
  return (
    <>
      <Nav first={"home"} second={"Blogs"}></Nav>
      <h1>Community</h1>
      <hr></hr>
      <Layout>
        <h2>Coming soon..</h2>
        <ArticleContainer>
          <Articles
            header={"Events"}
            brief={"See Tech events happening in your location"}
          ></Articles>
          <Articles
            header={"spaces"}
            brief={"listen to tech space hosted online"}
          ></Articles>
        </ArticleContainer>
      </Layout>
    </>
  );
}
