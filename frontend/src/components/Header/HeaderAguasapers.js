import styles from './Header.module.css';
import React from 'react';
import { Link } from "react-router-dom";
import { ExternalLink } from 'react-external-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
function HeaderAguasapars() {
  return (
    <header className={styles.header} id={styles.sectionText}>
      <Link to={`/`} className={styles.enlaceCabecera} ><FontAwesomeIcon icon={faArrowLeft} /> AguasapoFest
      </Link>
      <hr />
      <h2>Inscripción Festival</h2>
      <h3>Mié 24 - Dom 28</h3>
      <h3>Agosto 2022</h3>
      <ExternalLink href="https://www.instagram.com/aguasapo_fest/" className={styles.enlaceInstagram} ><FontAwesomeIcon icon={faInstagram} className={styles.iconInstagram} />
      </ExternalLink>
    </header>
  );
}

export default HeaderAguasapars;