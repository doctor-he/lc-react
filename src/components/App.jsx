import '../reset.css';
import '../App.css';
import { useState } from 'react';
import AppClass from './AppClass';

function App() {
  /**
   * Example on browser console:
    >  function fun() {return ['one', 'two']}
    <- undefined
    >  const [f,c] = fun()
    <- undefined
    >  f
    <- 'one'
    >  c
    <- 'two'
   */
  const [todos, setTodos] = useState([
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
  ]);
  return (
    <AppClass />
  );
}

export default App;
