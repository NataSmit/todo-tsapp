import React, { useEffect } from "react";
//import { useSelector, useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Todo from "../Todo/Todo";
import "./TaskList.css";
import List from "@mui/material/List";
import { Box } from "@mui/material";
import { getTodosFromLocalStorage } from "../../store/slices/TaskSlice";

export default function TaskList() {
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodosFromLocalStorage());
  }, []);

  return (
    <Box sx={{ flexGrow: 1, flexShrink: 1, flexBasis: "auto" }}>
      <List>
        {todos && todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </List>
    </Box>
  );
}
