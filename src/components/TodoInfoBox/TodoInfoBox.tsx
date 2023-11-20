import React from "react"
import { Box, IconButton } from "@mui/material"
import { useAppDispatch } from "../../store/hooks"
import ChangeTodoForm from "../ChangeTodoForm/ChangeTodoForm"
import { closeTodoInfoBox, deleteTodo } from "../../store/slices/TaskSlice"
import DeleteIcon from "@mui/icons-material/Delete"
import AddCommentForm from "../AddCommentForm/AddCommentForm"
import CloseIcon from "@mui/icons-material/Close"
import DueDateForm from "../DueDateForm/DueDateForm"
import styles from "./TodoInfoBox.module.scss"
import { TodoInfoBoxProps } from "../../types/types"

export default function TodoInfoBox ({ selectedTodo }: TodoInfoBoxProps) {
    const dispatch = useAppDispatch()
    const handleTodoInfoBoxClose = () => {
        dispatch(closeTodoInfoBox())
    }

    const handleTodoDelete = (id: number) => {
        dispatch(deleteTodo({ id }))
    }

    return (
        <Box className={styles.infoBoxFlexContainer}>
            <Box className={styles.infoBoxBody}>
                <IconButton
                    aria-label="delete"
                    color="primary"
                    onClick={handleTodoInfoBoxClose}
                >
                    <CloseIcon />
                </IconButton>
                {selectedTodo && (
                    <ChangeTodoForm
                        title={selectedTodo.title}
                        id={selectedTodo.id}
                        completed={selectedTodo.completed || false}
                        comment={selectedTodo.comment}
                        dueDate={selectedTodo.dueDate}
                    />
                )}
                {selectedTodo && (
                    <AddCommentForm
                        id={selectedTodo.id}
                        comment={selectedTodo.comment}
                    />
                )}
                {selectedTodo && (
                    <DueDateForm id={selectedTodo.id} dueDate={selectedTodo.dueDate} />
                )}
            </Box>
            <Box className={styles.deleteBtnContainer} >
                <IconButton
                    aria-label="delete"
                    color="primary"
                    onClick={
                        selectedTodo ? () => handleTodoDelete(selectedTodo.id) : undefined
                    }
                >
                    <DeleteIcon />
                </IconButton>
            </Box>
        </Box>
    )
}
