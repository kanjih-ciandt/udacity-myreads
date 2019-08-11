import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'


import ReadHeader from './components/ReadHeader'
import Shelf from './components/Shelf'
import FindBook from './components/FindBook'


function App() {
  return (
      <div className="App">
        <ReadHeader/>
        <Route exact path='/' render={() => (
          <Shelf/>
        )} />
        <Route path='/search' render={({ history }) => (
          <FindBook/>
        )} />
      </div>
  );
}

export default App;
