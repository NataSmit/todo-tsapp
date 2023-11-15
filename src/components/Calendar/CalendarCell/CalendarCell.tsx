import React from "react";
import "./CalendarCell.css";
import classNames from "classnames";
import { CalendarCellProps } from "../../../types/types";

export default function CalendarCell({
  date,
  isCurrentDate = false,
  handleCalendarCellClick,
  selected,
}: CalendarCellProps) {
  const calendarCellClass = classNames({
    calendarCell: true,
    calendarCellCurrentDay: isCurrentDate,
    calendarCellSelected: selected,
  });

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
  );
}
