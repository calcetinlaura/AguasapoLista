import styles from "./Concierto.module.css";
import Header from "../components/Header/HeaderCine";
import ImagenCine from "../components/Imagen/ImagenCine";
import Text from "../components/Text/TextCine";

const Cine = () => {
  return (
    <div id={styles.container}>
      <ImagenCine></ImagenCine>
      <div className={styles.containerBody}>
        <div className={styles.container_left}>
          <Header />
        </div>
        <div className={styles.container_right}>
          <Text />
        </div>
      </div>
    </div>
  );
};

export default Cine;
