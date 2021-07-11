import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.global.css';
import {
  clearProxySetting,
  exportProxySetting,
  sitesSettings,
  testProxySettings,
} from './data';
import DropdownMenu from './components/DropdownMenu';
import HeadingButton from './components/HeadingButton';
import AddProxiesModal from './components/AddProxiesModal';
import ProxyRow from './components/ProxyRow';
import Navigation from './components/Navigation';
import { Proxy } from './types';

const Hello = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [proxies, setProxies] = useState<Proxy[]>([]);

  const toggleModal = (visibility: boolean) => () => setIsVisible(visibility);
  return (
    <>
      <AddProxiesModal
        isVisible={isVisible}
        toggleModal={toggleModal(false)}
        setProxies={setProxies}
      />
      <Navigation />
      <div className="wrapper-main">
        <div className="button-wrapper">
          <HeadingButton
            text="Add Proxies"
            isHeading
            action={toggleModal(true)}
          />
        </div>
        <div className="wrapper-inner">
          <div className="heading-bar heading-table-row">
            <div className="heading-table-column">
              <h2>IP</h2>
            </div>
            <div className="heading-table-column">
              <h2>PORT</h2>
            </div>
            <div className="heading-table-column">
              <h2>USERNAME</h2>
            </div>
            <div className="heading-table-column">
              <h2>PASSWORD</h2>
            </div>
            <div className="heading-table-column">
              <h2>COUNTRY</h2>
            </div>
            <div className="heading-table-column">
              <h2>ISP</h2>
            </div>
            <div className="heading-table-column">
              <h2>SPEED</h2>
            </div>
          </div>
          <div className="wrapper-inner-table">
            {proxies.map((proxy: Proxy) => (
              <ProxyRow proxy={proxy} key={`${proxy.ip}:${proxy.port}`} />
            ))}
          </div>
          <div className="footer-bar">
            <div className="footer-test footer-child">
              <div className="footer-l">
                <DropdownMenu options={sitesSettings} searchable />
                <DropdownMenu options={testProxySettings} />
                <HeadingButton text="test" action={() => {}} />
              </div>
            </div>
            <div className="footer-clear footer-child">
              <div className="footer-c">
                <DropdownMenu options={clearProxySetting} />
                <HeadingButton text="Clear" action={() => {}} />
              </div>
            </div>
            <div className="footer-export footer-child">
              <div className="footer-r">
                <DropdownMenu options={exportProxySetting} />
                <HeadingButton text="Export" action={() => {}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
