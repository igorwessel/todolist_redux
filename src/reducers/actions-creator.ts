import { ADD_TODO } from 'reducers/actions'
import { v4 } from 'uuid'

export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload: {
        id: v4(),
        text
    }
})