import React, { Component } from 'react';
import './App.css';
import ReservationCard from '../ReservationCard/ReservationCard';
import Form from '../Form/Form';
import { getReservations } from '../ApiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: ''
    }
  }

  componentDidMount() {
    return getReservations()
      .then(reservationData => this.setState({reservations: reservationData}))
  }

  displayReservations = () => {
    if(this.state.reservations){
      return this.state.reservations.map(reservation => {
        return <ReservationCard reservation={reservation}/>
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
      <Form />
        </div>
        <div className='resy-container'>
          {this.displayReservations()}
        </div>
      </div>
    )
  }
}

export default App;
