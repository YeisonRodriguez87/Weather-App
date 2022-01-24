import React, { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('');
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        setCity ('');
      }}>            
        <input className = {styles.input}
        type="text"
        placeholder={'Enter the city...'}
        value = {city} 
        onChange = {e => setCity(e.target.value)}/>
        <button type = 'submit' className = {styles.btnSearch} onClick={()=>onSearch(city)}>Search</button>  
      </form>            
    </div>
  );
}