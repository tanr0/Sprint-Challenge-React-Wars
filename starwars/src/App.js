import React, { useEffect, useState } from "react";
import axios from "axios";

import PersonCard from './components/personCard';
import { Table } from 'reactstrap';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [warsData, setWarsData] = useState([]);
  useEffect(() => {
    axios
        .get(`https://swapi.co/api/people`)
        .then(response => {
          console.log(response.data)
          setWarsData(response.data.results)
        })
        .catch((err) =>{
          console.log(err);
        });
      },[])
console.log (warsData);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
                       <div className="table"> <Table Dark>
                       <thead>
                      <tr>
                        <th>Name</th>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>Hair Color</th>
                        <th>Skin Color</th>
                        <th>Eye Color</th>
                        <th>Birth Year</th>
                        <th>Gender</th>
                        <th>Film Count</th>
                        <th>Starships Owned</th>
                      </tr>
                    </thead>
      {warsData.map(person => {
                    return (
                   
                        <PersonCard
                            key={person.name}
                            name={person.name}
                            height={person.height}
                            mass={person.mass}
                            hairColor={person.hair_color}
                            skinColor={person.skin_color}
                            eyeColor={person.eye_color}
                            birthYear={person.birth_year}
                            gender={person.gender}
                            films={person.films.length}
                            starships={person.starships.length}
                        />
                      
                    );
                    
                  })}
                  </Table></div>
    </div>
  );
}

export default App;