import React from 'react';
import PropTypes from 'prop-types';

UnCompleteAllTodos.PropType = {
  unCompleteAllTodos: PropTypes.func.isRequired,
};
// npm install --save prop-types

function UnCompleteAllTodos(props) {
  return (
    <div>
      <div className="button" onClick={props.unCompleteAllTodos}>
        Uncheck All
      </div>
    </div>
  );
}

export default UnCompleteAllTodos;
