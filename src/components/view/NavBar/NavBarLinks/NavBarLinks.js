import React from 'react';
import styles from './NavBarLinks.module.scss';

const NavBarLinks = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li><a href='/home'>O nas</a></li>
        <li><a href='/contact'>Kontakt</a></li>
        <li><a href='/configurator'>Konfigurator zamówienia</a></li>
        <li><a href='/shoppingcard'>Koszyk</a></li>
      </ul>
    </div>
  )
}

export default NavBarLinks;