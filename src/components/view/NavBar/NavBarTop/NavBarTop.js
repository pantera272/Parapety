import React from 'react';
import styles from './NavBarTop.module.scss';
import NavBarTopInfo from '../NavBarTopInfo/NavBarTopInfo';
import NavBarTopSocial from '../NavBarTopSocial/NavBarTopSocial';

const NavBarTop = () => {
  return(
    <div className={styles.container}>
      <div className={styles.inner}>
        <div><NavBarTopInfo /></div>
        <div><NavBarTopSocial /></div>
      </div>
    </div>
  )
}

export default NavBarTop;