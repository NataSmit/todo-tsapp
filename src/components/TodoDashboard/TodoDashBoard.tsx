import React from "react";
import TaskList from "../TaskList/TaskList";
import CreateTodoForm from "../CreateTodoForm/CreateTodoForm";
import styles from "./TodoDashboard.module.scss";
import Container from '@mui/material/Container';

export default function TodoDashBoard() {
  return (
    <Container className={styles.container}>
      <TaskList />
      <CreateTodoForm />
    </Container>
  );
}
