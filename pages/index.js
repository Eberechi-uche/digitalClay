import Head from "next/head";
import Link from "next/link";
import Nav from "../component/nav";
import Layout from "../component/layout";
import { ArticleNav, ArticleContainer } from "../component/Articles";
import listenIcon from "../public/images/techTalk.png";
import blogIcon from "../public/images/blog.png";
import utilStyles from "../styles/utils.module.css";
import Hero from "../component/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>home</title>
      </Head>
      <Hero>
        <Nav first={"DigitalClay"} second={"Blogs"} third={"Community"}></Nav>
      </Hero>
      <Layout>
        <ArticleContainer>
          <Link href={"/post/Blog"}>
            <ArticleNav
              image={blogIcon}
              header={"Blogs"}
              brief={"Read about latest ideas happening in the tech space"}
            ></ArticleNav>
          </Link>
          <Link href={"/community"}>
            <ArticleNav
              image={listenIcon}
              header={"Community"}
              brief={"meet and connect with fellow techies"}
            ></ArticleNav>
          </Link>
        </ArticleContainer>
      </Layout>
    </div>
  );
}
