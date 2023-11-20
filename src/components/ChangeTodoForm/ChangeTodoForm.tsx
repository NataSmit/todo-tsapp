import { FormControl, InputAdornment } from "@mui/material"
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react"
import Checkbox from "@mui/material/Checkbox"
import OutlinedInput from "@mui/material/OutlinedInput"
import { useAppDispatch } from "../../store/hooks"
import { changeTodo, toggleComplete } from "../../store/slices/TaskSlice"
import { ChangeTodoFormProps } from '../../types/types'
import styles from './ChangeTodoForm.module.scss'

export default function ChangeTodoForm ({ title, completed, comment, id, dueDate }: ChangeTodoFormProps) {
    const dispatch = useAppDispatch()
    const [todo, setTodo] = useState(title)
    const inputClass = `${styles.input} ${completed ? styles.input_lineThrough : ''}`

    useEffect(() => {
        setTodo(title)
    }, [title])

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(
            changeTodo({
                title: todo,
                id,
                completed,
                comment,
                dueDate
            })
        )
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTodo(e.target.value)
    }

    const handleToggle = (e: ChangeEvent<HTMLInputElement>, id: number) => {
        dispatch(toggleComplete({ id }))
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
        )
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <FormControl variant="standard">
                <OutlinedInput
                    id="input-with-icon-adornment"
                    className={inputClass}
                    value={todo}
                    onChange={handleInputChange}
                    onBlur={onBlur}
                    startAdornment={
                        <InputAdornment position="start">
                            <Checkbox
                                checked={completed}
                                onChange={(e) => handleToggle(e, id)}
                            />
                        </InputAdornment>
                    }
                />
            </FormControl>
        </form>
    )
}
