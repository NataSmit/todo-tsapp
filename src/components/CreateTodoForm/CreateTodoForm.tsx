import React, { ChangeEvent, FormEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import { useAppDispatch } from "../../store/hooks";
import { addTodo } from "../../store/slices/TaskSlice";

export default function CreateTodoForm() {
  const dispatch = useAppDispatch()
  const [todo, setTodo] = useState(''); // there was title in props?
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTodo(e.target.value);
  }

  const saveTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  }

  return (
    <form onSubmit={saveTodo}>
      <TextField
        value={todo}
        onChange={handleInputChange}
        sx={{ width: "100%", backgroundColor: "white" }}
        placeholder="Добавить задачу"
      />
    </form>
  );
}
