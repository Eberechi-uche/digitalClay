import styles from "./layout.module.css";
import Link from "next/link";

function Nav({ first, second, third }) {
  return (
    <div className={styles.fl}>
      <Link href="/">
        <div>{first}</div>
      </Link>
      <Link href="/Blog">
        <div>{second}</div>
      </Link>
      <Link href="/event">
        <div>{third}</div>
      </Link>
    </div>
  );
}
export default Nav;
