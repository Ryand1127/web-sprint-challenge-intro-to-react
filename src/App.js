import React, { useState, useEffect } from 'react';
import './App.css';
import Characters from './components/Character'
import Styled from 'styled-components';

const StyledApp = Styled.div`
display: flex;
flex-wrap: wrap;

`


const StyledHeader = Styled.h1`

  font-size: 4.2rem;
  color: black;

`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  return (
    <div className="App">
      <StyledHeader className="Header">Star Wars Characters</StyledHeader>
      <StyledApp>
      <Characters></Characters>
      </StyledApp>
    </div>
  );
}

export default App;
