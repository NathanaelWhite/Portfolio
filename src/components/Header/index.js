import React from "react";

function Header() {

  return (
    <div>
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Nathanael White
        </a>
      </h2>
    </header>
    </div>
  );
}

export default Header;
