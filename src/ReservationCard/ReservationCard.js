import React from 'react';

const ReservationCard = ({ reservation }) => {
return (
  <section key={reservation.id} className='reservation-card'>
    <h3>{reservation.name} </h3>
    <p>{reservation.date}</p>
    <p>Number of guest: {reservation.number} </p>
    <button className='cancel-reservation-button'>Cancel</button>
  </section>
)
}

export default ReservationCard;