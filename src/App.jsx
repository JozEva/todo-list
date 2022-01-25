import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import "./App.css";
import Form from "./components/Form/Form";
import Todos from "./components/Todos/Todos";

const App = () => {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  console.log(todos);
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
      <Todos todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
    </Container>
  );
};

export default App;
