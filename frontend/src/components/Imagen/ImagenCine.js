import styles from './Imagen.module.css';
import React from 'react';
import ReactPlayer from 'react-player'
import Video from './../../assets/charlot.mp4'
function ImagenCine() {
  return (
    <div className={styles.boxImagen}>
      <ReactPlayer
        url={Video}
        className='react-player'
        playing
        width='100%'
        height='auto'
        muted='true'
        controls={true}
      />
    </div >
  );
}
export default ImagenCine;
