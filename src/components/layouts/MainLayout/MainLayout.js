import React from 'react';
import Baner from '../../view/Baner/Baner';
import NavBar from '../../view/NavBar/NavBar';

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Baner />
      <h1>MainLayout</h1>
    </div>
  )
}

export default MainLayout;