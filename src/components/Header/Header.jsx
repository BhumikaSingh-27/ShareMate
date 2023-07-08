import React from "react";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <div>
      <div>
        <h1>
          <span className="text-primary">Share</span>
          <span className="text-secondary-dark">M</span>
          <span className="text-primary">ate</span>
        </h1>
      </div>
      <SearchBar />
    </div>
  );
};

export default Header;
