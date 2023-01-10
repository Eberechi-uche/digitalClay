import styles from "./layout.module.css";
import Image from "next/image";
import profile from "../public/images/profile2.jpeg";

function Articles({ header, brief }) {
  return (
    <article className={styles.card}>
      <figure className={styles.imageContainer}>
        <Image
          priority
          src={profile}
          width={500}
          height={500}
          alt="image of a monkey"
        />
      </figure>
      <div className={styles.articleContent}>
        <h3>{header}</h3>
        <p>{brief}</p>
      </div>
    </article>
  );
}

export default Articles;
