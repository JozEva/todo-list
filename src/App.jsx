import React, { useEffect, useState } from "react";
import { Container, Box, Divider } from "@mui/material";
import Form from "./components/Form/Form";
import Todos from "./components/Todos/Todos";
import Header from "./components/Header/Header";
import "./App.scss";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const defaultClassName = "board";

  return (
    <Container className={defaultClassName}>
      <Box className={`${defaultClassName}-header`}>
        <Header />
      </Box>
      <Box className={`${defaultClassName}__list`}>
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
        <Divider />
        <Todos
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
          editTodo={editTodo}
        />
      </Box>
    </Container>
  );
};

export default App;
