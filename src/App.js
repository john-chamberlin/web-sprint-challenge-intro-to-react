import React, {useState,useEffect} from 'react';
import Character from './components/Character'
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

const App = () => {
  const [characters, setCharacters] = useState([])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    const fetchCharacters = () => {
      axios.get('https://swapi.dev/api/people/')
      .then((res) => {
        console.log(res.data.results);
        setCharacters(res.data.results);
      })
      .catch((err) => {
        console.log('no data! sucks!')
      })
    }

    fetchCharacters();
  }, []);

  return (
    <div className="App">
      <h1 className="Header">May React Be With You</h1>
      {characters.map(char => {
        return <Character key = {char.name} name = {char.name} birthyear = {char.birth_year}/>
      })}
    </div>
  );
}



export default App;
