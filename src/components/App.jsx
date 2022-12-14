import '../reset.css';
import '../App.css';
import { useState } from 'react';
// import AppClass from './AppClass';
import NoTodos from './NoTodos';
import FormTodo from './FormTodo';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish React Series',
      isComplete: true,
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
  const [idForTodoInput, setIdForTodoInput] = useState(4);

  function addTodo(todoTitle) {
    setTodos([
      ...todos,
      {
        id: idForTodoInput,
        title: todoTitle,
        isComplete: false,
      },
    ]);

    setIdForTodoInput(previousIdForTodo => previousIdForTodo + 1);
  }

  return (
    <div className="todo-app-container">
      <div>
        <div className="todo-app">
          <h2>Todo App</h2>
        </div>
      </div>
      <div>
        <div className="todo-app">
          <FormTodo addTodo={addTodo} />

          {todos.length > 0 ? (
            <TodoList todos={todos} setTodos={setTodos} />
          ) : (
            <NoTodos />
          )}
        </div>
      </div>
      <div>
        <div className="todo-app text-center">
          <p className={`footer`}>
            copywrite &copy;{' '}
            <a className={`link`} href="muathye.com">
              muathye.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
