import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './TodoForm';
import './styles/App.css'; 

const App = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, []);
  
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  return (
    <div className="container">
      <h1>Beer of the year</h1>
      <ul>
        <p1>"This beer is almost as good as Zach's cock" 8.5/10 - Adrian B </p1>
        <br></br>
        <img src='https://i.etsystatic.com/22590111/r/il/818d09/2222434772/il_fullxfull.2222434772_le2h.jpg'></img>

      </ul>
    </div>
  );
};

export default App;
