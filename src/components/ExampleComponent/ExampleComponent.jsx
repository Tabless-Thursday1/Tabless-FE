import React from 'react';
import { connect } from 'react-redux';

import './ExampleComponent.scss';

function ExampleComponent({ exampleVariable }) {
  const exampleText = `${exampleVariable} Component`;

  return (
    <>
      <p className="example-component">{exampleText}</p>
    </>
  );
}

const mapStateToProps = ({
  exampleVariable,
}) => ({
  exampleVariable,
});

export default connect(mapStateToProps, {})(ExampleComponent);
