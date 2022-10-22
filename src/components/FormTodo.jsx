import React, { useState } from 'react';

function FormTodo(props) {
  const [todoInput, setTodoInput] = useState('');

  const handleInput = event => {
    setTodoInput(event.target.value);
  };

  function handleSumbit(event) {
    // prevent browser default submit action
    event.preventDefault();

    // check if input is empty
    if (todoInput.trim().length === 0) {
      return;
    }

    props.addTodo(todoInput);

    setTodoInput('');
  }

  return (
    <form action="#" onSubmit={handleSumbit}>
      <input
        type="text"
        value={todoInput}
        onChange={handleInput}
        className="todo-input"
        placeholder="What do you need to do?"
      />
    </form>
  );
}

export default FormTodo;
