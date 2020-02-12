import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      numOfGuests: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <form className='reservation-form'>
        <input className='name-input'
        type='text'
        name='name'
        placeholder='Name'
        value={this.state.name}
        onChange={this.handleChange}
        />
        <input className='date-input'
        type='text'
        name='date'
        placeholder='Date (mm/dd)'
        value={this.state.date}
        onChange={this.handleChange}
        />
        <input className='time-input'
        type='text'
        name='date'
        placeholder='Time'
        value={this.state.time}
        onChange={this.handleChange}
        />
        <input className='numOfGuest-input'
        type='number'
        name='numOfGuests'
        placeholder='Number of guests'
        value={this.state.numOfGuests}
        onChange={this.handleChange}
        />
        <button className='make-reserveration-btn'>Make Reservation</button>
      </form>
    )
  }
}

export default Form;