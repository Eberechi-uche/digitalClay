import styles from "./layout.module.css";
import Image from "next/image";
import profile from "../public/images/profile2.jpeg";

function Articles({ title }) {
  return (
    <article className={styles.card}>
      <figure className={styles.imageContainer}>
        <Image src={profile} width={500} height={500}></Image>
      </figure>
      <div className={styles.articleContent}>
        <h3>{title}</h3>
        <p>
          this is a tale of a software dev this should be something nice i hope
          maybe
        </p>
      </div>
    </article>
  );
}

export default Articles;
