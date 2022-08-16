import react from 'react';
import { PropTypes } from 'prop-types';
import styles from './Header.module.scss';

const Header = ({ title, subtitle }) => {
  return (
    <div className={styles.container}>
      <p>{subtitle}</p>
      <h1>{title}</h1>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default Header;