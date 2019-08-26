import React from 'react';
import renderer from 'react-test-renderer';

import Login from './Login';

describe('<Dashboard />', () => {
  it('should match snapshot', () => {
    const component = renderer.create(<Login />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
