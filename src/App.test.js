import React from 'react'
import App from './App'

import { shallow } from 'enzyme'

it('renders without crashing', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.first('div').hasClass('outer-container')).toBeTrue
});
