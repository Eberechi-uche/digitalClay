import Layout from "../../component/layout";
import { getAllPostIds, getPostData } from "../../lib/post";
import Head from "next/head";
import Date from "../../component/Date";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Pager({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Layout>
        <div className={utilStyles.fl}>
          <h1 className={utilStyles.heading2Xl}>{postData.title}</h1>
          <div>
            <Date dateString={postData.date}></Date>
          </div>
        </div>

        <hr />

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <hr />
        <>
          <div>
            <Link className={utilStyles.btn} href={"/"}>
              home
            </Link>
            <Link className={utilStyles.btn} href={"/post/Blog"}>
              Blogs
            </Link>
          </div>
        </>
      </Layout>
    </>
  );
}
