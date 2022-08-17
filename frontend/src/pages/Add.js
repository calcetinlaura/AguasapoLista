import styles from './Welcome.module.css';
import Header from '../components/Header/HeaderConcierto';
import AddAsistente from './../components/asistentes/AddAsistente.js';
const Privacy = () => {
  return (
    <div id={styles.container}>
      <Header />
      <AddAsistente />
    </div>
  );
}
export default Privacy;