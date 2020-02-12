import React, { Component } from 'react';
import './App.css';
import ReservationCard from '../ReservationCard/ReservationCard'
import { getReservations } from '../ApiCalls'

class App extends Component {
  constructor() {
    super();
    this.state ={
      reservations: ''
    }
  }

  componentDidMount() {
    return getReservations()
      .then(reservationData => this.setState({reservation: reservationData}))
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
