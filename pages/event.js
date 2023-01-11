import Nav from "../component/nav";
import Layout from "../component/layout";

export default function () {
  return (
    <>
      <Nav first={"home"} second={"Blogs"}></Nav>
      <h1>Events</h1>
      <hr></hr>
      <Layout>
        <h3>get list of tech event in your location</h3>
        <p>Coming soon...</p>
      </Layout>
    </>
  );
}
