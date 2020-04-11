import { ADD_TODO, TOGGLE_TODO } from 'reducers/todos/actions'
import { v4 } from 'uuid'
import { Action } from '.'

export const addTodo = (text: string): Action => ({
    type: ADD_TODO,
    payload: {
        id: v4(),
        text
    }
})

export const toggleTodo = (id: string): Action => ({
    type: TOGGLE_TODO,
    payload: {
        id
    }
})