import React from 'react';
import PhoneList from '../Components/Contacts/PhoneList';

const setUp = props => shallow(<PhoneList {...props} />);

describe('Test component PhoneList', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should contain .PhoneList wrapper', () => {
    const wrapper = component.find('.PhoneList');
    expect(wrapper.length).toBe(1);
  });
});
