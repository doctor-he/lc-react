import React from 'react';
// import PropTypes from 'prop-types';

// TodoList.PropTypes = {
//     todos: PropTypes.array.isRequired,
//     setTodos: PropTypes.func.isRequired,
// };
// npm install --save prop-types

function TodoList(props) {
  const completeTodo = id => {
    const updatedTodo = props.todos.map(todo => {
      todo.isComplete = todo.id === id ? !todo.isComplete : todo.isComplete;
      return todo;
    });

    props.setTodos(updatedTodo);
  };

  function updateTodo(event, id) {
    const updatedTodo = props.todos.map(todo => {
      if (event.target.value.trim().length === 0) {
        todo.isEditing = false;
        return todo;
      }
      todo.title = todo.id === id ? event.target.value : todo.title;
      todo.isEditing = false;
      return todo;
    });

    props.setTodos(updatedTodo);
  }

  function cancelEditing() {
    const updatedTodo = props.todos.map(todo => {
      todo.isEditing = false;
      return todo;
    });

    props.setTodos(updatedTodo);
  }

  function markAsEditing(id) {
    const updatedTodo = props.todos.map(todo => {
      todo.isEditing = todo.id === id ? !todo.isEditing : todo.isEditing;
      return todo;
    });

    props.setTodos(updatedTodo);
  }

  const deleteTodo = id => {
    props.setTodos([...props.todos].filter(todo => todo.id !== id));
  };

  return (
    <>
      <ul className="todo-list">
        {props.todos.map((todo, index) => (
          /** [FIXED] react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop. */
          <li key={todo.id} className="todo-item-container">
            <div className="todo-item">
              <input
                onChange={() => completeTodo(todo.id)}
                type="checkbox"
                checked={`${todo.isComplete === true ? 'checked' : ''}`}
              />
              {todo.isEditing ? (
                <input
                  onBlur={event => updateTodo(event, todo.id)}
                  onKeyDown={event => {
                    if (event.key === 'Enter') {
                      updateTodo(event, todo.id);
                    } else if (event.key === 'Escape') {
                      cancelEditing();
                    }
                  }}
                  type="text"
                  className="todo-item-input"
                  defaultValue={todo.title}
                  autoFocus
                />
              ) : (
                <span
                  onDoubleClick={() => markAsEditing(todo.id)}
                  className={`todo-item-label ${
                    todo.isComplete ? 'line-through' : ''
                  }`}
                >
                  {todo.title}
                </span>
              )}
            </div>
            <button onClick={() => deleteTodo(todo.id)} className="x-button">
              <svg
                className="x-button-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>

      <div className="check-all-container">
        <div>
          <div className="button">Check All</div>
        </div>

        <span>3 items remaining</span>
      </div>

      <div className="other-buttons-container">
        <div>
          <button className="button filter-button filter-button-active">
            All
          </button>
          <button className="button filter-button">Active</button>
          <button className="button filter-button">Completed</button>
        </div>
        <div>
          <button className="button">Clear completed</button>
        </div>
      </div>
    </>
  );
}

export default TodoList;
