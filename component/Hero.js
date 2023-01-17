import sytles from "./layout.module.css";
import utilsStyles from "../styles/utils.module.css";
import AnimateText from "./Animatetext";

export default function Hero({ children }) {
  return (
    <main className={sytles.main}>
      <div>{children}</div>
      <AnimateText></AnimateText>
      <hr />
    </main>
  );
}
