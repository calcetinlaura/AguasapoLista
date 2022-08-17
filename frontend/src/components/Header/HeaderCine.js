import styles from './Header.module.css';
import React from 'react';
import { Link } from "react-router-dom";
import { ExternalLink } from 'react-external-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
function Header2() {
  return (
    <header className={styles.header} id={styles.sectionText}>
      <Link to={`/`} className={styles.enlaceCabecera} ><FontAwesomeIcon icon={faArrowLeft} /> AguasapoFest
      </Link>
      <hr />
      <h1>Cine</h1>
      <h4>Clandestino</h4>
      <h3>Miércoles 24 de agosto</h3>
      <h3>21:30 horas</h3>
      <ExternalLink href="https://www.instagram.com/aguasapo_fest/" className={styles.enlaceInstagram} ><FontAwesomeIcon icon={faInstagram} className={styles.iconInstagram} />
      </ExternalLink>
    </header>
  );
}

export default Header2;