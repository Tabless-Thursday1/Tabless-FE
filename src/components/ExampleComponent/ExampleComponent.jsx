import React from 'react';
import { connect } from 'react-redux';

import './ExampleComponent.scss';

import { exampleFunction } from '../../actions';

function ExampleComponent({ exampleVariable, click }) {
  const exampleText = `${exampleVariable} Component`;

  return (
    <>
      <button
        type="button"
        className="example-component"
        onClick={() => click()}
      >
        {exampleText}
      </button>
    </>
  );
}

const mapStateToProps = ({
  exampleVariable,
}) => ({
  exampleVariable,
});

export default connect(mapStateToProps, { click: exampleFunction })(ExampleComponent);
