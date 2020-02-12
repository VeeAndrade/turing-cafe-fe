import React from 'react';
import { shallow } from 'enzyme';
import ReservationCard from './ReservationCard';

describe('ReservationCard', () => {

  it('should match the snapshot with all the data passed in correctly', () => {
    const mockReservation = {
      id: 42,
      name: 'Vee',
      date: '06/21',
      time: '7:00',
      number: 3
    }
    const wrapper = shallow(<ReservationCard reservation={mockReservation} />)

    expect(wrapper).toMatchSnapshot();
  });
});