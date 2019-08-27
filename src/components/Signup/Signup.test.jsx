import React from 'react';
import renderer from 'react-test-renderer';

import Signup from './Signup';

describe('<Dashboard />', () => {
  it('should match snapshot', () => {
    const component = renderer.create(<Signup />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
