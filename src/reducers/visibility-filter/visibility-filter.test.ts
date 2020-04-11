import { expect } from 'chai'
import visibilityFilter, { FilterAction, initialState } from './index'
import { SET_VISIBILITY_FILTER, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from './actions'

it('should visibilityFilter is a function', () => {
    expect(visibilityFilter).to.be.a('function')
})

it('should show all todos', () => {
    const before: string = SHOW_COMPLETED
    const action: Readonly<FilterAction> = {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter: SHOW_ALL
        }
    }
    const after: string = SHOW_ALL

    expect(visibilityFilter(before, action)).to.be.equal(after)
})


it('should show just completed todos', () => {
    const before: string = SHOW_ALL
    const action: Readonly<FilterAction> = {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter: SHOW_COMPLETED
        }
    }
    const after: string = SHOW_COMPLETED

    expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('should show just active todos', () => {
    const before: string = SHOW_ALL
    const action: Readonly<FilterAction> = {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter: SHOW_ACTIVE
        }
    }
    const after: string = SHOW_ACTIVE

    expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('should return lastest state when action is undefined', () => {
    const before: string = SHOW_COMPLETED
    const action: Readonly<FilterAction> = {
        type: 'NOTHING',
        payload: {
            filter: SHOW_ACTIVE
        }
    }
    const after: string = SHOW_COMPLETED

    expect(visibilityFilter(before, action)).to.be.equal(after)
})


it('should return initialstate when latest state is undefined', () => {
    const before: undefined = undefined
    const action: any = {}
    const after = initialState

    expect(visibilityFilter(before, action)).to.be.equal(after)
})