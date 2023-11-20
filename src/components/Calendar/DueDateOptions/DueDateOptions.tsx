import React from "react"
import styles from "./DueDateOptions.module.scss"
import Stack from "@mui/material/Stack"
import Paper from "@mui/material/Paper"
import { DueDateOptionsProps } from "../../../types/types"

export default function DueDateOptions ({
    dueDateOptionsVisible,
    handleCalendarVisibility,
    setDueDateToday,
    setDueDateTomorrow,
    setDueDateNextWeek,
}: DueDateOptionsProps) {
    const containetClass = `${styles.optionsContainer} ${
        dueDateOptionsVisible ? styles.optionsContainer_visible : ""
    }`
    return (
        <Paper elevation={2} className={containetClass}>
            <Stack>
                <div className={styles.option} onClick={setDueDateToday}>
                  Сегодня
                </div>
                <div className={styles.option} onClick={setDueDateTomorrow}>
                  Завтра
                </div>
                <div className={styles.option} onClick={setDueDateNextWeek}>
                  Следующая неделя
                </div>
                <div className={styles.option} onClick={handleCalendarVisibility}>
                  Выбрать дату
                </div>
            </Stack>
        </Paper>
    )
}
