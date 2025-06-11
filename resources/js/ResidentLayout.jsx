import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebares from './components/Sidebares';
import Navbares from './components/Navbares';


const ResidentLayout = () => (
  <div className="app-container">
    <Sidebares />
    <div className="main-content">
      <Navbares />
      <Outlet />
    </div>
  </div>
);

export default ResidentLayout;
