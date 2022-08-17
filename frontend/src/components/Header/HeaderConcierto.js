import styles from './Header.module.css';
import React from 'react';
import { Link } from "react-router-dom";
import { ExternalLink } from 'react-external-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
function Header() {
  return (
    <header className={styles.header} id={styles.sectionText}>

      <Link to={`/`} className={styles.enlaceCabecera} ><FontAwesomeIcon icon={faArrowLeft} /> AguasapoFest
      </Link>
      <hr />
      <h1>Pedro Pastor</h1>
      <h2>Y los locos descalzos</h2>
      <h3>Jueves 25 de agosto</h3>
      <h3>21:30 horas</h3>
      <ExternalLink href="https://www.instagram.com/aguasapo_fest/" className={styles.enlaceInstagram} ><FontAwesomeIcon icon={faInstagram} className={styles.iconInstagram} />
      </ExternalLink>
    </header >
  );
}

export default Header;