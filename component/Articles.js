import styles from "./layout.module.css";
import Image from "next/image";
import profile from "../public/images/events.png";
import Date from "./Date";

export function ArticleContainer({ children }) {
  return <div className={styles.gr2}>{children}</div>;
}

export function Articles({ header, brief, date }) {
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
        <div>
          <h2>{header}</h2>{" "}
          <p className={styles.muted}>
            <Date dateString={date} />
          </p>
        </div>
        <hr />
        <p>{brief}</p>
      </div>
    </article>
  );
}
