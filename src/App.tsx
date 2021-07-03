import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../assets/icon.svg';
import './App.global.css';
import DropdownMenu from './components/DropdownMenu';

import HeadingButton from './components/HeadingButton';

const Hello = () => {
  return (
    <div className="wrapper-main">
      <div className="button-wrapper">
        <HeadingButton text="Add Proxies" isHeading />
      </div>
      <div className="wrapper-inner">
        <div className="heading-bar">
          <div>
            <h2>IP</h2>
          </div>
          <div>
            <h2>PORT</h2>
          </div>
          <div>
            <h2>USERNAME</h2>
          </div>
          <div>
            <h2>PASSWORD</h2>
          </div>
          <div>
            <h2>COUNTRY</h2>
          </div>
          <div>
            <h2>ISP</h2>
          </div>
          <div>
            <h2>SPEED</h2>
          </div>
        </div>
        <div>HEY</div>
        <div className="footer-bar">
          <div className="footer-test footer-child">
            <div className="footer-l">
              <DropdownMenu options={['Adidas', 'Footlocker']} />
              <DropdownMenu
                options={['Test 3 random proxies', 'Test all proxies']}
              />
              <HeadingButton text="test" />
            </div>
          </div>
          <div className="footer-clear footer-child">
            <div className="footer-c">
              <DropdownMenu options={['Clear all proxies', 'Clear failed']} />
              <HeadingButton text="Clear" />
            </div>
          </div>
          <div className="footer-export footer-child">
            <div className="footer-r">
              <DropdownMenu options={['All working proxies', 'All proxies']} />
              <HeadingButton text="Export" />
            </div>
          </div>
        </div>
      </div>
    </div>
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
