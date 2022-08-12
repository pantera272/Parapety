import React from 'react';
import styles from './Home.module.scss';
import Baner from '../Baner/Baner';

const Home = () => {
  return(
    <div className={styles.container}>
      <Baner />
    </div>
  ) 
}

export default Home;