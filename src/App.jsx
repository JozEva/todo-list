import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const id = todos.length ? todos[todos.length - 1].id + 1 : 0;

    const todo = {
      id: id,
      value: input,
    };

    if (!input) return;

    setTodos((oldList) => [...oldList, todo]);
    setInput("");
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  };

  console.log(todos)
  return (
    <Container>
      <Typography variant="h4" component="h1">
        title
      </Typography>
      <Box>
        <TextField
          label="Add todo..."
          variant="standard"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="contained" onClick={addTodo}>
          Add
        </Button>
      </Box>
      {todos.map((todo) => (
        <Box key={todo.id}>
          <p>{todo.value}</p>
          <Button variant="contained" onClick={() => removeTodo(todo.id)}>
            Delete
          </Button>
        </Box>
      ))}
    </Container>
  );
};

export default App;
