import styles from "./layout.module.css";
import Link from "next/link";

function Nav({ first, state }) {
  return (
    <div className={styles.fl}>
      <Link href="/">
        <div>{first}</div>
      </Link>
      <Link href="/">
        <div>{state}</div>
      </Link>
      <Link href="/">
        <div>music</div>
      </Link>
    </div>
  );
}
export default Nav;
