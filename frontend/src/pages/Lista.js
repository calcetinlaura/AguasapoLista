import styles from "./Welcome.module.css";
import ListaAsistentes from "../components/asistentes/ListaAsistentes.js";
const Privacy = () => {
  return (
    <div id={styles.container}>
      <ListaAsistentes />
    </div>
  );
};
export default Privacy;
