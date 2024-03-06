import {
  ADD_TODO,
  FILTER_TODOS,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_SEARCH_TERM,
} from './actions-types'

const initialState = {
  'todos': [],
  'filter': 'all',
  'searchTerm': '',
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        'todos': [
          ...state.todos,
          {
            'id': action.payload.id,
            'text': action.payload.text,
            'completed': false,
          },
        ],
      }
    }
    case TOGGLE_TODO: {
      return {
        ...state,
        // eslint-disable-next-line max-len
        // eslint-disable-next-line max-len, no-confusing-arrow, no-trailing-spaces
        'todos': state.todos.map((todo) => (todo.id === action.payload.id ? { ...todo, 'completed': !todo.completed } : todo)), 
      }
    }
    case REMOVE_TODO: {
      return {
        ...state,
        'todos': state.todos.filter((todo) => todo.id !== action.payload.id),
      }
    }
    case FILTER_TODOS: {
      return {
        ...state,
        'filter': action.payload.filter,
      }
    }
    case UPDATE_SEARCH_TERM: {
      return {
        ...state,
        'searchTerm': action.payload.term,
      }
    }
    default: {
      return state
    }
  }
}

export default todoReducer
