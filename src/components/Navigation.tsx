import React, { ReactElement } from 'react';
import { GrFormClose, GrSubtract } from 'react-icons/gr';
import logo from '../../assets/icons/icon.png';

export default function Navigation(): ReactElement {
  return (
    <div className="navigation-container">
      <div className="navigation-wrapper">
        <div className="navigation-left-container">
          <div className="navigation-logo-wrapper">
            <img className="navigation-logo" src={logo} alt="Raz Logo" />
          </div>
          <div className="navigation-text-wrapper">
            <h1 className="navigation-text">Proxy Tester</h1>
          </div>
        </div>
        <div className="navigation-menu-wrapper">
          <div className="navigation-menu-button">
            <GrSubtract />
          </div>
          <div className="navigation-menu-button">
            <GrFormClose />
          </div>
        </div>
      </div>
    </div>
  );
}
