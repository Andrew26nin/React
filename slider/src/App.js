import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';

import styled from 'styled-components';

import Header from './components/Header'
import Main from './components/Main'
import Menu from './components/Menu'

class App extends Component {
  render() {
    return (
    <div className="App">
      <Header />
      <Menu />
      <Main />
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
