import React from 'react';
import styles from './Card.module.css';
import {Link} from 'react-router-dom';

export default function Card(props) {
  return (    
        <div className = {styles.divCon}>
            <div className = {styles.divBtn}>
              <button className = {styles.btn} onClick={()=>props.onClose(props.id)}>x</button>
            </div>
            <Link to={`/ciudad/${props.id}`} style={{textDecoration: 'none'}}>                   
              <h4 style= {{color: 'white'}}>{props.name}</h4>
              <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Img not found"/>
              <p className = {styles.p}>Min {props.min}</p>              
              <p className = {styles.p}>Max {props.max}</p>                      
            </Link>  
        </div>        
  );
};