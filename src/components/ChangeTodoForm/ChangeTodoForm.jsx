import { FormControl, InputAdornment } from "@mui/material";
import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useAppDispatch } from "../../store/hooks";
import { changeTodo, toggleComplete } from "../../store/slices/TaskSlice";

export default function ChangeTodoForm({ title, completed, comment, id, dueDate }) {
  const dispatch = useAppDispatch();
  const [todo, setTodo] = useState(title);

  useEffect(() => {
    setTodo(title);
  }, [title]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      changeTodo({
        title: todo,
        id,
        completed,
        comment,
        dueDate
      })
    );
  }

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  }

  const handleToggle = (event) => {
    dispatch(toggleComplete({ id }));
  }

  const onBlur = () => {
    dispatch(
      changeTodo({
        title: todo,
        id,
        completed,
        comment,
        dueDate
      })
    );
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <FormControl variant="standard">
        <OutlinedInput
          id="input-with-icon-adornment"
          sx={{
            backgroundColor: "white",
            textDecoration: completed ? "line-through" : "",
          }}
          value={todo}
          onChange={handleInputChange}
          onBlur={onBlur}
          startAdornment={
            <InputAdornment position="start">
              <Checkbox
                checked={completed}
                onChange={(event, id) => handleToggle(id)}
              />
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  );
}
