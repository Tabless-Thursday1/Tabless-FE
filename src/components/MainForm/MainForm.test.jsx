/* global describe it expect */

import React from 'react';
import renderer from 'react-test-renderer';

import MainForm from './MainForm';

describe('<Dashboard />', () => {
  it('should match snapshot', () => {
    const component = renderer.create(<MainForm />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
