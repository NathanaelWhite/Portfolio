import React, { useState } from "react";
import Nav from '../Nav/index';

function Header() {
  const [currentPage, handlePageChange] = useState('About');

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Nathanael White
        </a>
      </h2>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
    </header>
  );
}

export default Header;
