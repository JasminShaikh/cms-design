import React from 'react';
import { Link } from 'react-router-dom';

const CMSLayout = ({ children }) => {
    return (
      <div className="cms-layout">
        <aside className="sidebar">
          <h2>CMS Dashboard</h2>
          <hr />
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/complaints">Complaints</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </aside>
        <div className="cms-content">{children}</div>
      </div>
    );
};

export default CMSLayout; 