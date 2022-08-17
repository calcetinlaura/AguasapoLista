import styles from './Imagen.module.css';
import React from 'react';
import Cartel from "./../../assets/img/programacion.webp";
function ImagenProgramacion() {
  return (
    <img class={styles.imgProgramacion} src={Cartel} />
  );
}
export default ImagenProgramacion;
