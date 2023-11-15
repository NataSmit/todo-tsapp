import React from "react";
import "./Todo.css";
import { useDispatch } from "react-redux";
import {
  handleTodoInfoBoxClick,
  toggleComplete,
} from "../../store/slices/TaskSlice";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Checkbox, ListItemIcon, Typography } from "@mui/material";
import { getDueDateValue } from "../../utils/utils";

export default function Todo({ todo }) {
  const dispatch = useDispatch();

  function toggleTodoComplete(id) {
    dispatch(toggleComplete({ id }));
  }

  function handleCheckboxClick(e) {
    e.stopPropagation();
  }

  function handleTodoClick(e, todo) {
    dispatch(handleTodoInfoBoxClick(todo));
  }

  return (
    <>
      <ListItem
        sx={{
          border: "1px solid grey",
          borderRadius: 3,
          mb: 1,
          backgroundColor: "white",
        }}
        onClick={(e, id) => handleTodoClick(e, todo)} ///// todo.id => todo
      >
        <ListItemIcon onClick={handleCheckboxClick}>
          <Checkbox
            edge="start"
            checked={todo.completed}
            onChange={(id) => toggleTodoComplete(todo.id)}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </Typography>
          }
          secondary={
            <Typography
              variant="caption"
              component="p"
            >{`Задачи ${getDueDateValue(todo.dueDate)}`}</Typography>
          }
        />
      </ListItem>
    </>
  );
}
