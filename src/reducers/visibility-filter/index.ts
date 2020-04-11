import { SHOW_ALL, SET_VISIBILITY_FILTER} from './actions'

export interface FilterAction {
    type: string;
    payload: Payload   
}

interface Payload {
    filter: string;
}

export const initialState = SHOW_ALL

const visibilityFilter = (state: string = initialState, action: FilterAction): string => {
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return action.payload.filter
    }
    return state
}

export default visibilityFilter