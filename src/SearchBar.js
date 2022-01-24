import React from "react";

import "./searchBar.css";

const SearchBar = ({ searchTerm, fetchData, setSearchTerm }) => {
  return (
    <div className="hero">
      <div className="wrap">
        <h1 className="hero-heading">Your favourite Books At One Place</h1>
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="Search for your favourite books"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            onKeyPress={(e) => {
              if(e.charCode === 13) fetchData();
            }}
          />
          <button type="submit" onClick={fetchData} className="searchButton">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
