import React from "react"
import styles from  "./CalendarCell.module.scss"
import { CalendarCellProps } from "../../../types/types"

export default function CalendarCell ({
    date,
    isCurrentDate = false,
    handleCalendarCellClick,
    selected,
}: CalendarCellProps) {
    const calendarCellClass = `${styles.calendarCell} ${isCurrentDate ? styles.calendarCellCurrentDay : ''} 
      ${selected ? styles.calendarCellSelected : ''}`

    return (
        <div
            className={calendarCellClass}
            onClick={
                handleCalendarCellClick && date
                    ? () => handleCalendarCellClick(date)
                    : undefined
            }
        >
            {date}
        </div>
    )
}
