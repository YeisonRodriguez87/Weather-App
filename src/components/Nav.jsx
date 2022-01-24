import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.jsx'
import styles from './Nav.module.css';


export default function Nav({onSearch}) {
  return (
    <nav className = {styles.divContainerNav}>
      <div>
        <h2 className = {styles.h2Nav}>Weather App</h2> 
      </div> 
      
        <div>
          <Link to='/' style= {{textDecoration: 'none', color: 'white', fontSize: '18px'}}><strong>Home</strong></Link> 
        </div>
        <div>
          <Link to='/about' style= {{textDecoration: 'none', color: 'white', fontSize: '18px'}}><strong>About</strong></Link> 
        </div>
        <div>	      
          <SearchBar onSearch = {onSearch}/>
        </div>      
    </nav>
  );
};


