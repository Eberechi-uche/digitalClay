import Nav from "../component/nav";
import Layout from "../component/layout";

export default function () {
  return (
    <>
      <Nav first={"home"} second={"Blogs"}></Nav>
      <h1>Community</h1>
      <hr></hr>
      <Layout>
        <p>
          ask question regarding blog post, see tech event happening around your
          location, listen to hosted tech spaces
        </p>
        <p>working on this</p>
      </Layout>
    </>
  );
}
