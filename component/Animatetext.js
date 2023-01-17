import styles from "./layout.module.css";

export default function AnimateText() {
  return (
    <div className={styles.hero}>
      {/* <h1> all you need to</h1> */}
      <div className={styles.animateContainer}>
        <h2 className={styles.bgText}>
          <span>""</span>
          <div className={styles.message}>
            <div className={styles.word1}>Learn</div>
            <div className={styles.word2}>Grow</div>
            <div className={styles.word3}>Connect</div>
          </div>
        </h2>
      </div>
    </div>
  );
}
