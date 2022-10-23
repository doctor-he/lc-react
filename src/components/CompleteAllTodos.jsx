import React from 'react';
import PropTypes from 'prop-types';

CompleteAllTodos.PropType = {
    completeAllTodos: PropTypes.func.isRequired,
};
// npm install --save prop-types

function CompleteAllTodos(props) {
  return (
    <div>
      <div className="button" onClick={props.completeAllTodos}>
        Check All
      </div>
    </div>
  );
}

export default CompleteAllTodos;
