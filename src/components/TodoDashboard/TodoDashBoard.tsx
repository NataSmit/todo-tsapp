import React from "react"
import TaskList from "../TaskList/TaskList"
import CreateTodoForm from "../CreateTodoForm/CreateTodoForm"
import styles from "./TodoDashboard.module.scss"

export default function TodoDashBoard () {
    return (
        <div className={styles.container}>
            <TaskList />
            <CreateTodoForm />
        </div>
    )
}
