import styles from "./layout.module.css";
import Image from "next/image";
import Date from "./Date";

export function ArticleContainer({ children }) {
  return <div className={styles.gr2}>{children}</div>;
}

export function Articles({ header, brief, date }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}></div>

      <div className={styles.articleContent}>
        <div>
          <h2>{header}</h2>{" "}
          <p className={styles.muted}>{date && <Date dateString={date} />}</p>
        </div>
        <hr />
        <p>{brief}</p>
      </div>
    </article>
  );
}
export function ArticleNav({ header, brief, image }) {
  return (
    <section>
      <div className={styles.cardNav}>
        <Image
          className={styles.BgImage}
          priority
          src={image}
          alt="image of a monkey"
        />
        <hr />
        <div className={styles.cardNavItems}>
          <h3>{header}</h3>
          <p>{brief}</p>
        </div>
      </div>
    </section>
  );
}
