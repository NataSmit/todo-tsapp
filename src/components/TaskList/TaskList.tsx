import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import TodoItem from "../Todo/Todo"
import styles from "./TaskList.module.scss"
import List from "@mui/material/List"
import { Box } from "@mui/material"
import { getTodosFromLocalStorage } from "../../store/slices/TaskSlice"

export default function TaskList () {
    const todos = useAppSelector((state) => state.todos)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getTodosFromLocalStorage())
    }, [])

    return (
        <Box  className={styles.listContainer} >
            <List>
                {todos && todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id} />
                ))}
            </List>
        </Box>
    )
}
