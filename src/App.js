import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import {Route} from 'react-router-dom';
import About from './components/About.jsx';
import Ciudad from './components/Ciudad.jsx';




var arrayCities = [];
var ciudad;
export default function App() {
  const [cities, setCities] = useState([]);   
  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

  function onSearch(city) { 
    if(arrayCities.includes(city)){
      return alert('City already on screen. Please enter another one.')      
    }
    ciudad = city;
    arrayCities = [...arrayCities, city] // array.push(city);  
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((resource) => {
        if(resource.main !== undefined){
          const city = {
            min: Math.round(resource.main.temp_min),
            max: Math.round(resource.main.temp_max),
            img: resource.weather[0].icon,
            id: resource.id,
            wind: resource.wind.speed,
            temp: resource.main.temp,
            name: resource.name,
            weather: resource.weather[0].main,
            clouds: resource.clouds.all,
            latitude: resource.coord.lat,
            longitud: resource.coord.lon
          };
          setCities(oldCities => [...oldCities, city]);
        } else {
          alert('City not found');
        }
      });
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
    arrayCities = arrayCities.filter(e => e !== ciudad);
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  return (
    <div className="App">
      <Route
        path='/'
        render={() => <Nav onSearch = {onSearch}/>}
      />
      <Route
        path='/about'
        component={About}
      />
      <div>
      <Route
        exact
        path='/'
        render={() => <Cards 
          cities = {cities} 
          onClose = {onClose}/>}
      /> 
      <Route 
        exact 
        path='/ciudad/:ciudadId' 
        render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}
      />
      </div>
      <br/>
    </div>
  );  
}

