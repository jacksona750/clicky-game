import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Memory</h1>
        <p className="lead">
          Click on the characters to win points, but don't click on the same character more than once. Good Luck!
        </p>
      </div>
    </div>
  );
}

export default Header;
