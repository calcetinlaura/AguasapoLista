import styles from "./Welcome.module.css";
import Header from "../components/Header/HeaderWelcome";
import Cartel from "./../assets/img/cartel.webp";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div id={styles.containerWelcome}>
      <div class={styles.containerWelcome_boxNav}>
        <Header />
      </div>
      <div class={styles.containerWelcome_boxImg}>
        <img class={styles.containerWelcome_boxImg_img} src={Cartel} />
      </div>
    </div>
  );
};
export default Welcome;
