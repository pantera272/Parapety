import React from 'react';
import NavBarLinks from '../NavBarLinks/NavBarLinks';
import styles from './NavBarBottom.module.scss';

const NavBarBottom = () => {
  return (
    <div className={styles.container}>
      <div><img src='/img/logo.png' alt='logo' /></div>
      <div><NavBarLinks /></div>
    </div>
  )
}

export default NavBarBottom;