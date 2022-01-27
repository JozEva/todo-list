import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import "./App.css";
import Form from "./components/Form/Form";
import Todos from "./components/Todos/Todos";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  console.log(todos);

  const clearTodos = () => {
    setTodos([]);
  }

  const tasksLeft = todos.length;

  return (
    <Container>
      <Typography variant="h4" component="h1">
        title
      </Typography>
      <Box>
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </Box>
      <Todos
        todos={todos}
        setTodos={setTodos}
        setEditTodo={setEditTodo}
        editTodo={editTodo}
      />
      <Typography >You have {tasksLeft} pending {tasksLeft === 1 ? "task" : "tasks"}</Typography>
      <Button onClick={clearTodos}>Clear all</Button>
    </Container>
  );
};

export default App;
