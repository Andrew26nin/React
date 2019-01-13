import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="wrapper">
      <SayFullName name='Андрей' surname='Тарасенко' link='#'/>
    </div>
    );
  }
}

function SayFullName(props) {
  return(
      <div>
          <h1>Мое имя {props.name}, моя фамилия {props.surname}</h1>
          <a href={props.link}>Ссылка на мой профиль</a>
      </div>
  )
}

export default App;
