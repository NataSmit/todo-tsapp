import React, { MouseEvent } from "react"
import styles from "./Todo.module.scss"
import { useAppDispatch } from "../../store/hooks"
import {
    handleTodoInfoBoxClick,
    toggleComplete,
} from "../../store/slices/TaskSlice"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { Checkbox, ListItemIcon, Typography } from "@mui/material"
import { getDueDateValue } from "../../utils/utils"
import { TodoProps, Todo } from '../../types/types'

export default function TodoItem ({ todo }: TodoProps) {
    const dispatch = useAppDispatch()
    const typographyClass = `${todo.completed ? styles.todoCompleted : ''}`

    const toggleTodoComplete = (id: number) => {
        dispatch(toggleComplete({ id }))
    }

    const handleCheckboxClick = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    const handleTodoClick = (e: MouseEvent<HTMLLIElement>, todo: Todo) => {
        dispatch(handleTodoInfoBoxClick(todo))
    }

    return (
        <ListItem
            className={styles.listItem}
            onClick={(e) => handleTodoClick(e, todo)}
        >
            <ListItemIcon onClick={handleCheckboxClick}>
                <Checkbox
                    edge="start"
                    checked={todo.completed}
                    onChange={() => toggleTodoComplete(todo.id)}
                    tabIndex={-1}
                    disableRipple
                />
            </ListItemIcon>
            <ListItemText
                primary={
                    <Typography
                        className={typographyClass}
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
    )
}
