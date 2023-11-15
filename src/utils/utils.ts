import { months } from "./constants/calendarConstants";
import { DateTime } from "luxon";
import { Todo } from "../types/types";

export function getTodosFromLS() {
  let todoHistory = [];
  if (localStorage["todoHistory"]) {
    try {
      todoHistory = JSON.parse(localStorage.getItem("todoHistory") || "") || [];
    } catch (e) {
      localStorage.removeItem("todoHistory");
    }
  }
  return todoHistory;
}

export function saveTodosToLS(todos: Todo[]) {
  localStorage.setItem("todoHistory", JSON.stringify(todos));
}

export const getDates = (date: DateTime): number[] => {
  const daysInMonth = date.daysInMonth;
  const arr = [];
  if (daysInMonth) {
    for (let i = 1; i <= daysInMonth; i++) {
      arr.push(i);
    }
  }

  return arr;
}

export const getMonthName = (index: number) => {
  return months.filter((item, id) => id === index)[0];
};

export const getDueDateValue = (dueDate: string) => {
  return (
    dueDate &&
    DateTime.fromISO(dueDate).toLocaleString({
      weekday: "short",
      day: "2-digit",
      month: "short",
    })
  );
}
