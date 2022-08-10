import React from 'react';
import styles from './NavBarTopInfo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const NavBarTopInfo = () => {
  return(
    <div className={styles.container}>
      <ul>
        <li><FontAwesomeIcon icon={faPhone} /></li>
        <li>(+48) 666 666 666</li>
        <li><FontAwesomeIcon icon={faClock} /></li>
        <li>Pon - Pt: 8:00 - 16:00</li>
        <li><FontAwesomeIcon icon={faEnvelope} /></li>
        <li>parapety@parapety.pl</li>
      </ul>
    </div>
  )
}

export default NavBarTopInfo;
