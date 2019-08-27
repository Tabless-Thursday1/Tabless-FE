/* global describe it expect */

import React from 'react';
import renderer from 'react-test-renderer';

import SignupForm from './SignupForm';

describe('<Dashboard />', () => {
  it('should match snapshot', () => {
    const component = renderer.create(<SignupForm />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
