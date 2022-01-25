import React from "react";
import styles from './Ciudad.module.css';

export default function Ciudad({city}) {
    return (
        <div>
            <div className = {styles.divCiudad}>
                <h2>{city.name}</h2>
                <div>
                    <p className = {styles.p}>Temperature: {city.temp} ºC</p>
                    <p className = {styles.p}>Climate: {city.weather}</p>
                    <p className = {styles.p}>Wind: {city.wind} km/h</p>
                    <p className = {styles.p}>Amount of Clouds: {city.clouds}</p>
                    <p className = {styles.p}>Latitude: {city.latitude}º</p>
                    <p className = {styles.p}>Length: {city.longitud}º</p>
                </div>
            </div>
        </div>
    )
}