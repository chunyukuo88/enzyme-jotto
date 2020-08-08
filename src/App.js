import React, { Component } from 'react';
import './App.css';

import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";
import Input from "./Input";

class App extends Component {
  render(){
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true}/>
        <GuessedWords guessedWords={[{guessedWord: 'beeves', letterMatchCount: 3}]}/>
        <Input secretWord={'farts'}/>
      </div>
    );
  }
}

export default App;
