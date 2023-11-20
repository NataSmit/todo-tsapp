import { createSlice } from "@reduxjs/toolkit"
import { getTodosFromLS, saveTodosToLS } from "../../utils/utils"
import { TodoState } from "../../types/types"

const initialState: TodoState = {
    todos: null,
    selectedTodo: null,
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Number((Math.random() * 100).toFixed(0)),
                title: action.payload,
                completed: false,
                comment: "",
                dueDate: "",
            }
            state.todos && state.todos.push(newTodo)
            state.todos && saveTodosToLS(state.todos)
        },
        deleteTodo: (state, action) => {
            state.todos =
        state.todos &&
        state.todos.filter((todo) => todo.id !== action.payload.id)
            state.selectedTodo = null
            state.todos && saveTodosToLS(state.todos)
        },
        toggleComplete: (state, action) => {
            if (state.selectedTodo) {
                state.selectedTodo.completed = !state.selectedTodo.completed
            }

            state.todos =
        state.todos &&
        state.todos.map((todo) => {
            if (todo.id === action.payload.id) {
                return { ...todo, completed: !todo.completed }
            } else return todo
        })

            state.todos && saveTodosToLS(state.todos)
        },
        handleTodoInfoBoxClick: (state, action) => {
            if (state.selectedTodo && action.payload.id === state.selectedTodo.id) {
                state.selectedTodo = null
            } else {
                state.selectedTodo = action.payload
            }
        },
        changeTodo: (state, action) => {
            state.todos =
        state.todos &&
        state.todos.map((todo) => {
            if (todo.id === action.payload.id) {
                return {
                    ...todo,
                    title: action.payload.title,
                    completed: action.payload.completed,
                }
            } else return todo
        })
            state.selectedTodo = state.selectedTodo && {
                ...state.selectedTodo,
                title: action.payload.title,
                completed: action.payload.completed,
            }
            state.todos && saveTodosToLS(state.todos)
        },
        getTodosFromLocalStorage: (state) => {
            state.todos = getTodosFromLS()
        },
        closeTodoInfoBox: (state) => {
            state.selectedTodo = null
        },
        addComment: (state, action) => {
            state.todos =
        state.todos &&
        state.todos.map((todo) => {
            if (todo.id === action.payload.id) {
                return { ...todo, comment: action.payload.comment }
            } else return todo
        })
            state.selectedTodo = state.selectedTodo && {
                ...state.selectedTodo,
                comment: action.payload.comment,
            }
            state.todos && saveTodosToLS(state.todos)
        },
        addDueDate: (state, action) => {
            state.todos =
        state.todos &&
        state.todos.map((todo) => {
            if (todo.id === action.payload.id) {
                return { ...todo, dueDate: action.payload.dueDate }
            } else return todo
        })
            state.selectedTodo = state.selectedTodo && {
                ...state.selectedTodo,
                dueDate: action.payload.dueDate,
            }
            state.todos && saveTodosToLS(state.todos)
        },
        deleteDueDate: (state, action) => {
            state.todos =
        state.todos &&
        state.todos.map((todo) => {
            if (todo.id === action.payload.id) {
                return { ...todo, dueDate: "" }
            } else return todo
        })
            state.selectedTodo = state.selectedTodo && {
                ...state.selectedTodo,
                dueDate: "",
            }
            state.todos && saveTodosToLS(state.todos)
        },
    },
})

export const {
    addTodo,
    deleteTodo,
    toggleComplete,
    handleTodoInfoBoxClick,
    changeTodo,
    closeTodoInfoBox,
    addComment,
    addDueDate,
    deleteDueDate,
    getTodosFromLocalStorage,
} = todoSlice.actions
