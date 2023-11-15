import { FormControl, InputAdornment } from "@mui/material";
import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useDispatch } from "react-redux";
import { changeTodo, toggleComplete } from "../../store/slices/TaskSlice";

export default function ChangeTodoForm({ title, completed, comment, id, dueDate }) {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState(title);

  useEffect(() => {
    setTodo(title);
  }, [title]);

  function handleFormSubmit(e) {
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

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleToggle(event) {
    dispatch(toggleComplete({ id }));
  }

  function onBlur() {
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
