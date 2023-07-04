import React from "react";
import SortIcon from "@mui/icons-material/Sort";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div>
        <h1>
          <span className="text-primary">Share</span>
          <span className="text-secondary-dark">M</span>
          <span className="text-primary">ate</span>
        </h1>
      </div>
      <div>Home</div>
      <div>
        <SortIcon />
      </div>
    </div>
  );
};

export default Header;
