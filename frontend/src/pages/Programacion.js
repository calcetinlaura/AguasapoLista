import styles from './Programacion.module.css';
import Header from '../components/Header/HeaderProgramacion';
import ImagenProgramacion from '../components/Imagen/ImagenProgramacion';

const Cine = () => {
  return (
    <div id={styles.container}>
      <div className={styles.containerBody}>
        <div className={styles.container_left}>
          <Header />
        </div>
        <div className={styles.container_right}>
          <ImagenProgramacion></ImagenProgramacion>
        </div>
      </div>
    </div>
  );
}

export default Cine;