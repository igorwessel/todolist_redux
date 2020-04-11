import { SET_VISIBILITY_FILTER } from './actions'

export const setVisibilityFilter = (filter: string) => ({
    type: SET_VISIBILITY_FILTER,
    payload: {
        filter
    }
})