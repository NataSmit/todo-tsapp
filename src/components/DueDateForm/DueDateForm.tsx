import React, { useState } from "react"
import Calendar from "../Calendar/Calendar"
import { DateTime } from "luxon"
import styles from "./DueDateForm.module.scss"
import DueDateOptions from "../Calendar/DueDateOptions/DueDateOptions"
import { Box, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { useAppDispatch } from "../../store/hooks"
import { addDueDate, deleteDueDate } from "../../store/slices/TaskSlice"
import { getDueDateValue } from "../../utils/utils"
import {DueDateFormProps} from '../../types/types'

export default function DueDateForm ({ id, dueDate }: DueDateFormProps) {
    const dispatch = useAppDispatch()
    const [calendarVisible, setCalendarVisible] = useState(false)
    const [currentDate, setCurrentDate] = useState<DateTime>(DateTime.now())
    const [dueDateOptionsVisible, setDueDateOptionsVisible] = useState(false)

    const handleCalendarVisibility = () => {
        setDueDateOptionsVisible(false)
        setCalendarVisible(!calendarVisible)
    }

    const handleDueDateOptionsVisibility = () => {
        setDueDateOptionsVisible(!dueDateOptionsVisible)
    }

    const handleDeleteDueDate = () => {
        dispatch(deleteDueDate({ id }))
    }

    const setDueDateToday = () => {
        dispatch(addDueDate({ id: id, dueDate: DateTime.now().toISO() }))
        setDueDateOptionsVisible(false)
    }

    const setDueDateTomorrow = () => {
        dispatch(
            addDueDate({ id: id, dueDate: DateTime.now().plus({ days: 1 }).toISO() })
        )
        setDueDateOptionsVisible(false)
    }

    const setDueDateNextWeek = () => {
        dispatch(
            addDueDate({
                id: id,
                dueDate: DateTime.now().plus({ weeks: 1 }).startOf("week").toISO(),
            })
        )
        setDueDateOptionsVisible(false)
    }

    return (
        <>
            <form className={styles.form}>
                <Box className={styles.container}>
                    <div className={styles.dueDateBox}>
                        <p onClick={handleDueDateOptionsVisibility}>{`${
                            dueDate
                                ? `Срок: ${getDueDateValue(dueDate)}`
                                : "Добавить дату выполнения"
                        }`}</p>
                        {dueDate ? (
                            <IconButton onClick={handleDeleteDueDate}>
                                <CloseIcon />
                            </IconButton>
                        ) : null}
                    </div>

                    <DueDateOptions
                        dueDateOptionsVisible={dueDateOptionsVisible}
                        handleCalendarVisibility={handleCalendarVisibility}
                        setDueDateToday={setDueDateToday}
                        setDueDateTomorrow={setDueDateTomorrow}
                        setDueDateNextWeek={setDueDateNextWeek}
                    />
                </Box>
            </form>

            <Calendar
                calendarVisible={calendarVisible}
                currentDate={currentDate}
                setCurrentDate={setCurrentDate}
                id={id}
                dueDate={dueDate}
                setCalendarVisible={setCalendarVisible}
            />
        </>
    )
}
