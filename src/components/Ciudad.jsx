import React from "react";
import styles from './Ciudad.module.css';

export default function Ciudad({city}) {
    return (
        <div>
            <div className = {styles.divCiudad}>
                <h2>{city.name}</h2>
                <div>
                    <p>Temperature: {city.temp} ºC</p>
                    <p>Climate: {city.weather}</p>
                    <p>Wind: {city.wind} km/h</p>
                    <p>Amount of Clouds: {city.clouds}</p>
                    <p>Latitude: {city.latitude}º</p>
                    <p>Length: {city.longitud}º</p>
                </div>
            </div>
        </div>
    )
}