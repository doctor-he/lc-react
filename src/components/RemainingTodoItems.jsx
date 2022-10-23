import React from 'react';
import PropTypes from 'prop-types';

RemainingTodoItems.PropType = {
    todos: PropTypes.array.isRequired,
};
// npm install --save prop-types

function RemainingTodoItems(props) {
  function remainingTodosCount() {
    return props.todos.filter(todo => !todo.isComplete).length;
  }
  return (
    <span>
      {`${remainingTodosCount() !== 0 ? remainingTodosCount() : ''}`}{' '}
      {`${
        remainingTodosCount() > 0 ? 'items remaining' : 'All items completed'
      }`}
    </span>
  );
}

export default RemainingTodoItems;
