import React from 'react';
import styles from './NavBar.module.scss';
import NavBarBottom from './NavBarBottom/NavBarBottom';
import NavBarTop from './NavBarTop/NavBarTop';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <NavBarTop />
      <NavBarBottom />
    </div>
  )
}

export default NavBar;