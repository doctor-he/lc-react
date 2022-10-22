import React from 'react';
// import PropTypes from 'prop-types';

// ClearCompletedTodo.PropTypes = {
//     clearCompleted: PropTypes.func.isRequired,
// };
// npm install --save prop-types

function ClearCompletedTodo(props) {
  return (
    <button className="button" onClick={props.clearCompleted}>
      Clear completed
    </button>
  );
}

export default ClearCompletedTodo;
