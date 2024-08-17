const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const dbURI = process.env.MONGO_URI;

const todoSchema = new mongoose.Schema({
  task: String,
  completed: Boolean,
});

const Todo = mongoose.model('Todo', todoSchema);

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(dbURI)
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection error:', err));

app.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post('/todos', async (req, res) => {
  const newTodo = new Todo(req.body);
  await newTodo.save();
  res.json(newTodo);
});
// Update an existing todo
app.put('/todos/:id', async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTodo);
});
// Delete a todo
app.delete('/todos/:id', async (req, res) => {
  await Todo.findByIdAndRemove(req.params.id);
  res.json({ message: 'Todo deleted successfully' });
});