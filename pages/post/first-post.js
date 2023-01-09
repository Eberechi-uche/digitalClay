import Link from "next/link";
import Head from "next/head";
import Layout from "../../component/layout";

function FirstPost() {
  return (
    <>
      <Head>
        <title> welcome to my first post</title>
      </Head>
      <div>
        <Layout>
          <h1>my first next js post</h1>
          <Header title={"click counter the making"}></Header>
          <Header title={"prgraming as a service"}></Header>
          <Header title={"irrational thought"}></Header>
          <Header title={"glass Mind"}></Header>
        </Layout>
      </div>
    </>
  );
}

export default FirstPost;

function Header({ title }) {
  return (
    <>
      <h2>{title}</h2>
      <hr></hr>
      <p>this is a tale of a software dev</p>
      <Link href="/"> home</Link>
    </>
  );
}
