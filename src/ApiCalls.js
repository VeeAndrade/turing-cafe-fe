export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => {
      if(!response.ok) {
        throw Error('Failure to get reservations')
      }
      return response.json()
    })
}

export const postReservation = (reservation) => {
  const option = {
    method: 'POST',
    body: JSON.stringify({reservation}),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch('http://localhost:3001/api/v1/reservations', option)
    .then(response => {
      if(!response.ok) {
        throw Error('Failure to make reservation')
      }
      return response.json()
    })
}