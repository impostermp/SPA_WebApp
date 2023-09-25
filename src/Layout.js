import React from 'react';
import Aside from './Aside';

function Layout({ children }) {
  return (
    <div className="Layout">
      <Aside />
      <div className="MainContent">
        {children}
      </div>
    </div>
    
  );
}

export default Layout;