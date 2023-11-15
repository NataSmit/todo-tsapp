import { Container } from "@mui/material";
import React from "react";
import TodoInfoBox from "../TodoInfoBox/TodoInfoBox";
import { useAppSelector } from "../../store/hooks";
import styles from "./TodoControlPanel.module.scss";

export default function TodoControlPanel() {
  const selectedTodo = useAppSelector((state) => state.selectedTodo);
  const containerClass = `${styles.todoControlPanel} ${
    selectedTodo ? styles.todoControlPanel_visible : ""
  }`;

  return (
    <div className={containerClass}>
      <Container>
        <TodoInfoBox selectedTodo={selectedTodo} />
      </Container>
    </div>
  );
}
