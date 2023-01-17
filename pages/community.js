import Nav from "../component/nav";
import Layout from "../component/layout";
import { Articles, ArticleContainer, ArticleNav } from "../component/Articles";
import events from "../public/images/event.png";
import spaces from "../public/images/headphones.png";

export default function () {
  return (
    <>
      <Nav first={"home"} second={"Blogs"}></Nav>
      <h1>Community</h1>
      <hr></hr>
      <Layout>
        <h2>Coming soon..</h2>
        <ArticleContainer>
          <ArticleNav
            header={"Events"}
            brief={"See Tech events happening in your location"}
            image={events}
          ></ArticleNav>
          <ArticleNav
            header={"spaces"}
            brief={"listen to tech space hosted online"}
            image={spaces}
          ></ArticleNav>
        </ArticleContainer>
      </Layout>
    </>
  );
}
