import styles from './Header.module.css';
import React from 'react';
import { Link } from "react-router-dom";
import { ExternalLink } from 'react-external-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
function Header2() {
  return (
    <header className={styles.header} id={styles.sectionText}>
      <Link to={`/`} className={styles.enlaceCabecera} > AguasapoFest
      </Link>
      <hr />
      <br></br>
      <p className={styles.fecha} >Miércoles 24 - Domingo 28</p>
      <h5>Festival</h5>
      {/*<h6>Agotadas</h6>*/}
      <p className={styles.enlace} >
        <Link to="/programacion" className={styles.buttonNav}>Programación 2022</Link>
        <Link to="/aguasapers" className={styles.buttonNav}>Agotadas - Inscripción</Link>
      </p>
      <p className={styles.fecha} >Miércoles 24 de Agosto</p >
      <h5>Cine </h5>
      <p className={styles.enlace} >
        <Link to="/cine" className={styles.buttonNav} > Reservar últimas plazas</Link>
      </p>

      <p className={styles.fecha} >Jueves 25 de Agosto</p >
      <h5>Pedro Pastor <br></br> <span>y Los Locos Descalzos</span></h5>
      {/*<h6>Agotadas</h6>*/}
      <p className={styles.enlace} >
        <Link to="/concierto" className={styles.buttonNav}>Agotadas - Lista de espera</Link>
      </p>
      <ExternalLink href="https://www.instagram.com/aguasapo_fest/" className={styles.enlaceInstagram} ><FontAwesomeIcon icon={faInstagram} className={styles.iconInstagram} />
      </ExternalLink>
    </header >
  );
}

export default Header2;