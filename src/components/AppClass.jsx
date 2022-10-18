import React, { Component } from 'react';

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Finish React Series',
          isComplete: false,
        },
        {
          id: 2,
          title: 'Go Grocery',
          isComplete: true,
        },
        {
          id: 3,
          title: 'Take over world',
          isComplete: false,
        },
      ],
      todoInput: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput = event => {
    this.setState(preState => {
      return { todoInput: event.target.value };
    });
  };

  addTodo = event => {
    event.preventDefault();

    if (this.state.todoInput.trim().length === 0) {
      return;
    }

    // update global state
    this.setState(prevState => {
      const newTodos = [
        ...prevState.todos,
        {
          id: 4,
          title: this.state.todoInput,
          isComplete: false,
        },
      ];

      return { todos: newTodos };
    });
    
    this.setState(prevState => {
      return this.todoInput = '';
    });
  };

  handleSubmit(event) {
    this.setState({todoInput: ''});
  }

  deleteTodo = id => {
    // update global state
    this.setState(prevState => {
      return { todos: prevState.todos.filter(todo => todo.id !== id) };
    });
  };

  render() {
    return (
      <div className="todo-app-container">
        <div className="todo-app">
          <h2>Todo App</h2>
          <form action="#" onSubmit={this.addTodo}>
            <input
              type="text"
              value={this.todoInput}
              onChange={this.handleInput}
              className="todo-input"
              placeholder="What do you need to do?"
            />
          </form>

          <ul className="todo-list">
            {this.state.todos.map((todo, index) => (
              <li key={todo.id} className="todo-item-container">
                <div className="todo-item">
                  <input type="checkbox" />
                  <span className="todo-item-label">{todo.title}</span>
                  {/* <input type="text" className="todo-item-input" value="Finish React Series" /> */}
                </div>
                <button
                  onClick={() => this.deleteTodo(todo.id)}
                  className="x-button"
                >
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
}
