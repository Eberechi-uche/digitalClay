import styles from "./layout.module.css";
import Image from "next/image";
import profile from "../public/images/profile2.jpeg";

function Articles({ header }) {
  return (
    <article className={styles.card}>
      <figure className={styles.imageContainer}>
        <Image src={profile} width={500} height={500}></Image>
      </figure>
      <div className={styles.articleContent}>
        <h3>{header}</h3>
        <p>{header}</p>
      </div>
    </article>
  );
}

export default Articles;
