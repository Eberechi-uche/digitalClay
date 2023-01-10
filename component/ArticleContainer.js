import styles from "./layout.module.css";

function ArticleContainer({ children }) {
  return <div className={styles.gr2}>{children}</div>;
}
export default ArticleContainer;
