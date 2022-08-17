import styles from './Concierto.module.css';
import Header from '../components/Header/HeaderConcierto';
import Imagen from '../components/Imagen/ImagenConcierto';
import Text from '../components/Text/TextConcierto';

const Privacy = () => {
  return (
    <div id={styles.container}>
      <Imagen></Imagen>
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
}
export default Privacy;