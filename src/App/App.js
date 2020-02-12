import React, { Component } from 'react';
import './App.css';
import ReservationCard from '../ReservationCard/ReservationCard'

class App extends Component {
  constructor() {
    super();
    this.state ={
      reservations: ''
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ReservationCard />
        </div>
      </div>
    )
  }
}

export default App;
