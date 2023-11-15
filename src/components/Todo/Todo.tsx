import React, { MouseEvent } from "react";
import "./Todo.css";
import { useAppDispatch } from "../../store/hooks";
import {
  handleTodoInfoBoxClick,
  toggleComplete,
} from "../../store/slices/TaskSlice";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Checkbox, ListItemIcon, Typography } from "@mui/material";
import { getDueDateValue } from "../../utils/utils";
import { TodoProps, Todo } from '../../types/types'

export default function TodoItem({ todo }: TodoProps) {
  const dispatch = useAppDispatch();

  const toggleTodoComplete = (id: number) => {
    dispatch(toggleComplete({ id }));
  }

  const handleCheckboxClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }

  const handleTodoClick = (e: MouseEvent<HTMLLIElement>, todo: Todo) => {
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
        onClick={(e) => handleTodoClick(e, todo)} ///// todo.id => todo
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
