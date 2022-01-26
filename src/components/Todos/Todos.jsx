import React from "react";
import { ListItem, Button, Box } from "@mui/material";

const Todos = ({ todos, setTodos, editTodo, setEditTodo }) => {
  const completeTodo = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  };

  const startEditingTodo = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);

    setEditTodo(findTodo);
  };

  const stopEditingTodo = () => {
    setEditTodo(null);
  };

  return (
    <>
      {todos.map((todo) => (
        <ListItem key={todo.id}>
          {todo.title}
          <Box>
            <Button variant="contained" onClick={() => completeTodo(todo)}>
              {!todo.completed ? "Done" : "Undone"}
            </Button>
            {!editTodo ? (
              <Button
                variant="contained"
                onClick={() => startEditingTodo(todo)}
              >
                Edit
              </Button>
            ) : (
              <Button variant="contained" onClick={() => stopEditingTodo(todo)}>
                Stop
              </Button>
            )}
            <Button variant="contained" onClick={() => removeTodo(todo.id)}>
              Delete
            </Button>
          </Box>
        </ListItem>
      ))}
    </>
  );
};

export default Todos;
