import { DateTime } from "luxon"

export type Todo = {
  id: number,
  title: string,
  completed: boolean,
  comment: string,
  dueDate: string,
}


export type TodoState = {
  todos: Todo[] | null,
  selectedTodo: Todo | null
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

export type ContainerProps = {
  children: React.ReactNode
}

export type TodoProps = {
  todo: Todo
}

export type DueDateOptionsProps = {
  dueDateOptionsVisible: boolean,
  handleCalendarVisibility: () => void,
  setDueDateToday: () => void,
  setDueDateTomorrow: () => void,
  setDueDateNextWeek: () => void
}

export type ChangeTodoFormProps = {
  title: string, 
  completed: boolean, 
  comment: string, 
  id: number, 
  dueDate: string
}