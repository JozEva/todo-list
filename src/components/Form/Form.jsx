import React from "react";
import { Button, TextField, Box } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import "./Form.scss"

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const handleTodo = () => {
    const id = todos.length ? todos[todos.length - 1].id + 1 : 0;

    if (input.length < 3) return;

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

  const defaultClassName = "form";

  return (
    <Box className={defaultClassName}>
      <TextField
        label={!editTodo ? "Add todo..." : "Edit todo..."}
        variant="standard"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <Button type="submit" className={`${defaultClassName}-button`} variant="text" onClick={handleTodo}>
        {!editTodo ? <AddCircleIcon fontSize="large" /> : <EditIcon fontSize="large" />}
      </Button>
    </Box>
  );
};

export default Form;
