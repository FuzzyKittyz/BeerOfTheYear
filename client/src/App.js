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
        <img src='https://preview.redd.it/e3jhhwib4ao31.jpg?auto=webp&s=69f7dd294222b54c8224ef12175941c07d176314'></img>

      </ul>
    </div>
  );
};

export default App;
