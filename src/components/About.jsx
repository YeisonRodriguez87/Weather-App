import React from 'react';
import styles from './About.module.css';

export default function About(){
    return (
        <div className = {styles.divAbout}>
            <h3>About the application and its creator</h3>
            <p className = {styles.p}>
            Application made in the Front End module of the Soy Henry bootcamp obtaining the data from the Weather API, the technologies used were JavaScript, React for the elaboration of its components and CSS modules for its design, in which you are going to being able to see the weather of all the cities of the world in real time. Its creator, Yeison Rodriguez, was born in Bogota - Colombia in February 1987, she loves new challenges and found in programming the best way to find solutions to various situations of daily life.
            </p>
            <img src={'https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2014/09/25/140925152108_clima_iconos_304x171_thinkstock.jpg'} alt="Img not found" width= '250px' heigh= '300px'/>
        </div>    
    )
}