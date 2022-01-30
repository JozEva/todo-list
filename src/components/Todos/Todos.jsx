import React from "react";
import { ListItem, Button, Box, Typography, Divider } from "@mui/material";
import EditOffIcon from "@mui/icons-material/EditOff";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { pink } from "@mui/material/colors";
import "./Todos.scss";

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
    if (!todo.completed) {
      setEditTodo(null)
    }
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  };

  const startEditingTodo = ({ id, completed }) => {
    const findTodo = todos.find((todo) => todo.id === id);

    if (completed) {
      return
    }

    setEditTodo(findTodo);
  };

  const stopEditingTodo = () => {
    setEditTodo(null);
  };

  const clearTodos = () => {
    setTodos([]);
  };

  const tasksLeft = todos.length;

  const defaultClassName = "todos";

  const completedTaskClassName = `${defaultClassName}-title--completed`

  return (
    <>
      <Box className={defaultClassName}>
        {todos.map((todo) => (
          <ListItem key={todo.id} className={`${defaultClassName}-todo`}>
            <Typography className={!todo.completed ? `${defaultClassName}-title` : completedTaskClassName}>
              {todo.title}
            </Typography>
            <Box className={`${defaultClassName}-actions`}>
              {!todo.completed ? (
                <RadioButtonUncheckedIcon
                  className={`${defaultClassName}-actions--action`}
                  sx={{ color: pink[500] }}
                  onClick={() => completeTodo(todo)}
                />
              ) : (
                <CheckCircleOutlineIcon
                  className={`${defaultClassName}-actions--action`}
                  color="primary"
                  onClick={() => completeTodo(todo)}
                />
              )}
              {!editTodo ? (
                <EditIcon
                  className={`${defaultClassName}-actions--action`}
                  color="primary"
                  onClick={() => startEditingTodo(todo)}
                />
              ) : (
                <EditOffIcon
                  className={`${defaultClassName}-actions--action`}
                  sx={{ color: pink[500] }}
                  onClick={() => stopEditingTodo(todo)}
                />
              )}
              <ClearIcon
                className={`${defaultClassName}-actions--action`}
                sx={{ color: pink[500] }}
                onClick={() => removeTodo(todo.id)}
              />
            </Box>
          </ListItem>
        ))}
      </Box>
      <Divider />
      <Box className={`${defaultClassName}-count`}>
        <Typography>
          You have {tasksLeft} pending {tasksLeft === 1 ? "task" : "tasks"}
        </Typography>
        <Button onClick={clearTodos}>Clear all</Button>
      </Box>
    </>
  );
};

export default Todos;
