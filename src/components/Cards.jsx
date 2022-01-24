import React from 'react';
import Card from './Card.jsx';
import styles from './Cards.module.css';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  if(!props.cities){
    return <h1>No cities available</h1>
  }

  return (
      <div className = {styles.divCards}>
        {
          props.cities && props.cities.map(c => (
            <Card
               max={c.max}
               min={c.min}
               name={c.name}
               img={c.img}
               onClose={props.onClose}
               key={c.id}
               id ={c.id}
            />
        ))
        }
      </div>
  )
};