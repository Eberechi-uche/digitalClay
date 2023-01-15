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
