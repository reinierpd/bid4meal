import React from 'react';
import {shallow} from 'enzyme';
import Home from './home.jsx';

describe('Home', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home/>);
  });

  test('should render ok', () => {
    expect(wrapper).toMatchSnapshot();
  });

});