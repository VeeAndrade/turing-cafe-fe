import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  let wrapper
  const mockPostReservation = jest.fn();

  beforeEach(() => {
    wrapper = shallow( <Form postReservation={mockPostReservation} /> )

  })
  it('should match the snapshot with all the correct args', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when handleChange is called', () => {
    const mockEvent = {
      target: {
        name: 'name',
        value: 'Vee'
      }
    }
    const mockEvent2 = {
      target: {
        name: 'date',
        value: '06/21'
      }
    }  

    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('name')).toEqual('Vee'); 

    wrapper.instance().handleChange(mockEvent2)
    expect(wrapper.state('date')).toEqual('06/21');
  });

  it('should call make reservation and reset inputs', () => {
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().resetInputs = jest.fn;

    wrapper.instance().makeReservation(mockEvent)

    expect(mockPostReservation).toHaveBeenCalled();
  })
});