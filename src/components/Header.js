import React from 'react';
import './Header.css'; 

const Header = ({ search, setSearch }) => {
  return (
    <header className="header">
   
    <h1 className="title">Pokeapp! Welcome To pokemon world</h1>
 
   
    <input
      type="text"
      placeholder="Search..."
      className="searchBox"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </header>
  );
};

export default Header;
