import {
  ADD_TODO,
  FILTER_TODOS,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_SEARCH_TERM,
} from './actions-types'

export const addTodo = (todoObj) => ({
  'type': ADD_TODO,
  'payload': todoObj,
})

export const toggleTodo = (id) => ({
  'type': TOGGLE_TODO,
  'payload': { id },
})

export const removeTodo = (id) => ({
  'type': REMOVE_TODO,
  'payload': { id },
})

export const filterTodos = (filter) => ({
  'type': FILTER_TODOS,
  'payload': { filter },
})

export const updateSearchTerm = (term) => ({
  'type': UPDATE_SEARCH_TERM,
  'payload': { term },
})
