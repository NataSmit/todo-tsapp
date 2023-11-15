import React from "react";
import "./DueDateOptions.css";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

export default function DueDateOptions({
  dueDateOptionsVisible,
  handleCalendarVisibility,
  setDueDateToday,
  setDueDateTomorrow,
  setDueDateNextWeek,
}) {
  return (
    <Paper
      elevation={2}
      sx={{
        width: 200,
        backgroundColor: "white",
        display: dueDateOptionsVisible ? "block" : "none",
        position: "absolute",
        top: "100%",
        left: "30px",
      }}
    >
      <Stack>
        <div className="option" onClick={setDueDateToday}>
          Сегодня
        </div>
        <div className="option" onClick={setDueDateTomorrow}>
          Завтра
        </div>
        <div className="option" onClick={setDueDateNextWeek}>
          Следующая неделя
        </div>
        <div className="option" onClick={handleCalendarVisibility}>
          Выбрать дату
        </div>
      </Stack>
    </Paper>
  );
}
