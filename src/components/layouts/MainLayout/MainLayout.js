import React from 'react';
import NavBar from '../../view/NavBar/NavBar';
import PropTypes from 'prop-types';

const MainLayout = ({children}) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node,
}

export default MainLayout;