import { DateTime } from "luxon"

export type Todo = {
  id: number,
  title: string,
  completed: boolean,
  comment: string,
  dueDate: string,
}

export type TodoInfoBoxProps = {
  selectedTodo: Todo | null
}

export type AddCommentFormProps = {
  comment: string,
  id: number
}

export type DueDateFormProps = {
  id: number, 
  dueDate: string
}

export type CalendarProps = {
  calendarVisible: boolean,
  currentDate: DateTime,
  setCurrentDate: (v: DateTime) => void,
  id: number,
  dueDate: string,
  setCalendarVisible: (V: boolean) => void
}

export type CalendarCellProps = {
  date?: number,
  isCurrentDate?: boolean,
  handleCalendarCellClick?: (v: number) => void,
  selected?: boolean
}