import React from 'react';
import styles from './NavBarTopSocial.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGooglePlus } from '@fortawesome/free-brands-svg-icons';

const NavBarTopSocial = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <a href='facebook.com'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href='instagram.com'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a href='tweeter.com'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href='google.com'>
            <FontAwesomeIcon icon={faGooglePlus} />
          </a>
        </li>
      </ul>
    </div>
  )
}
export default NavBarTopSocial;