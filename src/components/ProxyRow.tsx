import React, { ReactElement } from 'react';
import { Proxy } from '../types';

interface Props {
  proxy: Proxy;
}

export default function ProxyRow({ proxy }: Props): ReactElement {
  return (
    <div className="heading-table-row">
      <div className="heading-table-column">
        <h2>{proxy.ip}</h2>
      </div>
      <div className="heading-table-column">
        <h2>{proxy.port}</h2>
      </div>
      <div className="heading-table-column">
        <h2>{proxy.username}</h2>
      </div>
      <div className="heading-table-column">
        <h2>{proxy.password}</h2>
      </div>
      <div className="heading-table-column">
        <h2>{proxy.country}</h2>
      </div>
      <div className="heading-table-column">
        <h2>{proxy.isp}</h2>
      </div>
      <div className="heading-table-column">
        <h2>{proxy.speed}</h2>
      </div>
    </div>
  );
}
