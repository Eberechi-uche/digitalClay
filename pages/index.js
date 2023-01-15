import Head from "next/head";
import Link from "next/link";
import Nav from "../component/nav";
import Layout from "../component/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>home</title>
      </Head>
      <Nav first={"DigitalClay"} second={"Blogs"} third={"Community"}></Nav>
      <h1>Recent</h1>
      <hr />
      <Layout>
        <p>
          Hello, welcome to DigitalClay, you can read about some of the things i
          am working on, stay up to date with physical tech event happening in
          your Location or listen online tech talk. currently i am still working
          on the two but in the mean time you can read some of my articles
        </p>
      </Layout>
    </div>
  );
}
