import { TextField } from "@mui/material"
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useAppDispatch } from "../../store/hooks"
import { addComment } from "../../store/slices/TaskSlice"
import {AddCommentFormProps} from '../../types/types'
import styles from './AddCommentForm.module.scss'

export default function AddCommentForm ({ comment, id }: AddCommentFormProps) {
    const [commentValue, setCommentValue] = useState(comment)
    const dispatch = useAppDispatch()

    useEffect(() => {
        setCommentValue(comment)
    }, [comment])

    const handleCommentChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCommentValue(e.target.value)
    }

    const handleCommentSubmit = (e: FormEvent<HTMLFormElement>, id: number, comment: string) => {
        e.preventDefault()
        dispatch(addComment({ id, comment }))
    }

    const onBlur = () => {
        dispatch(addComment({ id, comment: commentValue }))
    }

    return (
        <form
            className={styles.form}
            onSubmit={(e) => handleCommentSubmit(e, id, commentValue)}
        >
            <TextField
                className={styles.textField}
                value={commentValue}
                onChange={handleCommentChange}
                label="Добавить заметку"
                variant="outlined"
                onBlur={onBlur}
            />
        </form>
    )
}
