import React from 'react';
import './ReservationCard.css'

const ReservationCard = ({ reservation }) => {
return (
  <section key={reservation.id} className='reservation-card'>
    <h3 className='reservation-detail'>{reservation.name} </h3>
    <p className='reservation-detail'>{reservation.date}</p>
    <p className='reservation-detail'>{reservation.time} pm</p>
    <p className='reservation-detail'>Number of guest: {reservation.number} </p>
    <button className='cancel-reservation-button'>Cancel</button>
  </section>
  )
}

export default ReservationCard;