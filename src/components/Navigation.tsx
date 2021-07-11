import React, { ReactElement } from 'react';
import { RiCloseLine, RiSubtractLine } from 'react-icons/ri';

import logo from '../../assets/icons/icon.png';

export default function Navigation(): ReactElement {
  const { ipcRenderer } = window.require('electron');
  const ipc = ipcRenderer;

  const closeWindow = () => {
    ipc.send('closeApp');
  };

  const minimizeWindow = () => {
    ipc.send('minimizeApp');
  };
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
          <div
            className="navigation-menu-button"
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
            onClick={minimizeWindow}
          >
            <RiSubtractLine />
          </div>
          <div
            className="navigation-menu-button"
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
            onClick={closeWindow}
          >
            <RiCloseLine />
          </div>
        </div>
      </div>
    </div>
  );
}
