import styles from './Concierto.module.css';
import Header from '../components/Header/HeaderAguasapers';
import Imagen from '../components/Imagen/ImagenAguasapers';
import Text from '../components/Text/TextAguasapers';

const Aguasapers = () => {
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

export default Aguasapers;