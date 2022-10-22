import '../reset.css';
import '../App.css';
import { useState } from 'react';
import AppClass from './AppClass';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish React Series',
      isComplete: false,
      isEditing: false,
    },
    {
      id: 2,
      title: 'Go Grocery',
      isComplete: true,
      isEditing: false,
    },
    {
      id: 3,
      title: 'Take over world',
      isComplete: false,
      isEditing: false,
    },
  ]);
  const [todoInput, setTodoInput] = useState('');
  const [idForTodoInput, setIdForTodoInput] = useState(4);
  /**
  >  const myArray = ['one', 'two']
  <- undefined
  >  [...myArray]
  <- (2) ['one', 'two']
  >  [...myArray, 'three']
  <- (3) ['one', 'two', 'three']
  */
  function addTodo(event) {
    // prevent browser default submit action
    event.preventDefault();

    // check if input is empty
    if (todoInput.trim().length === 0) {
      return;
    }

    setTodos([
      ...todos,
      {
        id: idForTodoInput,
        title: todoInput,
        isComplete: false,
      },
    ]);

    setTodoInput('');
    setIdForTodoInput(previousIdForTodo => previousIdForTodo + 1);
  }
  const handleInput = event => {
    setTodoInput(event.target.value);
  };

  const deleteTodo = id => {
    setTodos([...todos].filter(todo => todo.id !== id));
  };

  const completeTodo = id => {
    const updatedTodo = todos.map(todo => {
      todo.isComplete = todo.id === id ? !todo.isComplete : todo.isComplete;
      return todo;
    });

    setTodos(updatedTodo);
  };

  function markAsEditing(id) {
    const updatedTodo = todos.map(todo => {
      todo.isEditing = todo.id === id ? !todo.isEditing : todo.isEditing;
      return todo;
    });

    setTodos(updatedTodo);
  }

  function cancelEditing() {
    const updatedTodo = todos.map(todo => {
      todo.isEditing = false;
      return todo;
    });

    setTodos(updatedTodo);
  }

  function updateTodo(event, id) {
    const updatedTodo = todos.map(todo => {
      if (event.target.value.trim().length === 0) {
        todo.isEditing = false;
        return todo;
      }
      todo.title = todo.id === id ? event.target.value : todo.title;
      todo.isEditing = false;
      return todo;
    });

    setTodos(updatedTodo);
  }
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <form action="#" onSubmit={addTodo}>
          <input
            type="text"
            value={todoInput}
            onChange={handleInput}
            className="todo-input"
            placeholder="What do you need to do?"
          />
        </form>

        <ul className="todo-list">
          {todos.map((todo, index) => (
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
      </div>
    </div>
  );
}

export default App;
