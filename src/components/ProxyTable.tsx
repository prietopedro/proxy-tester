import React, { ReactElement } from 'react';
import { Proxy } from '../types';

interface Props {
  proxies: Proxy[];
}

export default function ProxyTable({ proxies }: Props): ReactElement {
  return (
    <table className="proxy-table">
      <thead className="proxy-table-head">
        <tr className="proxy-table-head-row">
          <th className="proxy-table-head-column proxy-column">
            <div>IP</div>
          </th>
          <th className="proxy-table-head-column proxy-column">
            <div>PORT</div>
          </th>
          <th className="proxy-table-head-column proxy-column">
            <div>USERNAME</div>
          </th>
          <th className="proxy-table-head-column proxy-column">
            <div>PASSWORD</div>
          </th>
          <th className="proxy-table-head-column proxy-column">
            <div>COUNTRY</div>
          </th>
          <th className="proxy-table-head-column proxy-column">
            <div>ISP</div>
          </th>
          <th className="proxy-table-head-column proxy-column">
            <div>SPEED</div>
          </th>
        </tr>
      </thead>
      <tbody className="proxy-table-body">
        {proxies.map((proxy: Proxy) => (
          <tr key={proxy.ip + proxy.port} className="proxy-table-body-row">
            <td className="proxy-table-body-column proxy-column">
              <div>{proxy.ip}</div>
            </td>
            <td className="proxy-table-body-column proxy-column">
              <div>{proxy.port}</div>
            </td>
            <td className="proxy-table-body-column proxy-column">
              <div>{proxy.username}</div>
            </td>
            <td className="proxy-table-body-column proxy-column">
              <div>{proxy.password}</div>
            </td>
            <td className="proxy-table-body-column proxy-column">
              <div>{proxy.country}</div>
            </td>
            <td className="proxy-table-body-column proxy-column">
              <div>{proxy.isp}</div>
            </td>
            <td className="proxy-table-body-column proxy-column">
              <div>{proxy.speed}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
