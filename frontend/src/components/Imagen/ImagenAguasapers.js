import styles from './Imagen.module.css';
import React from 'react';
import ReactPlayer from 'react-player'
import Video from './../../assets/aguasapo5.mp4'
function ImagenAguasapers() {
  return (
    <div className={styles.boxImagen}>
      <ReactPlayer
        url={Video}
        className={styles.playerAguasapo}
        playing
        width='100%'
        height='auto'
        muted='true'
        controls={true}
      />
    </div >
  );
}
export default ImagenAguasapers;
