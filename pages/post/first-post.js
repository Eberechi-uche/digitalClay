import Link from "next/link";

function FirstPost() {
  return (
    <div>
      <h1>my first next js post</h1>
      <Head></Head>
    </div>
  );
}

export default FirstPost;

function Head() {
  return (
    <>
      <h2>recent posts</h2>
      <hr></hr>
      <p>this is a tale of a software dev</p>
      <Link href="/"> home</Link>
    </>
  );
}
