import styles from './Welcome.module.css';
import EditAsistente from './../components/asistentes/EditAsistente.js';
const Privacy = () => {
  return (
    <div id={styles.container}>
      <EditAsistente />
    </div>
  );
}
export default Privacy;