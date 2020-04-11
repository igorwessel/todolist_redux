import { ADD_TODO, TOGGLE_TODO } from "./actions"

export const initialState: Array<State> = []

export interface Action {
    type?: string;
    payload?: Partial<Payload>
}

export interface Payload {
    id: string;
    text: string;
}

export interface State {
    id?: string;
    text?: string;
    completed?: boolean;
}

const todos = (state = initialState, action: Action) => {
    switch(action.type){
        case ADD_TODO:
            return state.concat({
                id: action.payload?.id,
                text: action.payload?.text,
                completed: false
            })

        case TOGGLE_TODO:
            return state.map((todo) => {

                if(todo.id !== action.payload?.id) {
                    return todo
                }

                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
    }
    return state
}

export default todos