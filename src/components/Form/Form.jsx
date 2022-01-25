import React from "react";
import { Button, TextField } from "@mui/material";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const handleTodo = () => {
    const id = todos.length ? todos[todos.length - 1].id + 1 : 0;

    if (!input) return;

    if (!editTodo) {
      setTodos([...todos, { id: id, title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
      setInput("");
    }
  };

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  return (
    <>
      <TextField
        label="Add todo..."
        variant="standard"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <Button variant="contained" onClick={handleTodo}>
        {!editTodo ? "Add" : "Update"}
      </Button>
    </>
  );
};

export default Form;
