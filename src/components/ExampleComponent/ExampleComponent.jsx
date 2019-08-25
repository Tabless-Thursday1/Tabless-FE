import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './ExampleComponent.scss';

import { exampleFunction } from '../../actions';

const ExampleComponent = ({ exampleVariable, click }) => {
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
};

ExampleComponent.propTypes = {
  exampleVariable: PropTypes.string,
  click: PropTypes.func.isRequired,
};

ExampleComponent.defaultProps = {
  exampleVariable: 'Default Text',
};

const mapStateToProps = ({
  exampleVariable,
}) => ({
  exampleVariable,
});

export default connect(mapStateToProps, { click: exampleFunction })(ExampleComponent);
