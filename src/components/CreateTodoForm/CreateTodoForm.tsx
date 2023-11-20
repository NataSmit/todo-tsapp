import React, { ChangeEvent, FormEvent, useState } from "react"
import TextField from "@mui/material/TextField"
import { useAppDispatch } from "../../store/hooks"
import { addTodo } from "../../store/slices/TaskSlice"
import styles from './CreateTodoForm.module.scss'

export default function CreateTodoForm () {
    const dispatch = useAppDispatch()
    const [todo, setTodo] = useState('')
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTodo(e.target.value)
    }

    const saveTodo = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(addTodo(todo))
        setTodo("")
    }

    return (
        <form onSubmit={saveTodo}>
            <TextField
                value={todo}
                onChange={handleInputChange}
                className={styles.textField}
                placeholder="Добавить задачу"
            />
        </form>
    )
}
