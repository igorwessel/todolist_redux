import { expect } from 'chai'
import todos, { State, Action, initialState } from './todos'
import { ADD_TODO, TOGGLE_TODO } from './actions'

it('should todos is be a function', () => {
    expect(todos).to.be.a('function')
}) 

it('should add a todo', () => {
    const before: Array<State> = []
    
    const action: Readonly<Action> = {
        type: ADD_TODO,
        payload: {
            id: 0,
            text: 'Hey'
        }
    }
    const after: Array<State> = [{
        id: 0,
        text: 'Hey',
        completed: false,
    }]
    
    expect(todos(before, action)).to.be.deep.equal(after)
})

it('should add a new todo item', () => {
    const before: Array<State> = ([{
        id: 0,
        text: 'Hey',
        completed: false
    }])
    
    const action: Readonly<Action> = {
        type: ADD_TODO,
        payload: {
            id: 1,
            text: 'Ho'
        }
    }

    const after: Array<State> = [
        {id: 0, text: 'Hey', completed: false,},
        {id: 1, text: 'Ho', completed: false,}
    ]
    
    expect(todos(before, action)).to.be.deep.equal(after)
})


it('should toggle first todo', () => {
    const before: Array<State> = [        
        {id: 0, text: 'Hey', completed: false,},
        {id: 1, text: 'Ho', completed: false,}
    ]
    
    const action: Readonly<Action> = {
        type: TOGGLE_TODO,
        payload: {
            id: 0
        }
    }
    const after: Array<State> = [
        {id: 0, text: 'Hey', completed: true,},
        {id: 1, text: 'Ho', completed: false,}
    ]
    
    expect(todos(before, action)).to.be.deep.equal(after)
})


it('should toggle second todo ', () => {
    const before: Array<State> = [        
        {id: 0, text: 'Hey', completed: false,},
        {id: 1, text: 'Ho', completed: false,}
    ]
    
    const action: Readonly<Action> = {
        type: TOGGLE_TODO,
        payload: {
            id: 1
        }
    }
    const after: Array<State> = [
        {id: 0, text: 'Hey', completed: false,},
        {id: 1, text: 'Ho', completed: true,}
    ]
    
    expect(todos(before, action)).to.be.deep.equal(after)
})

it('should return the latest state when action is unknown', () => {
    const before: Array<State> = [        
        {id: 0, text: 'Hey', completed: false,}
    ]

    const action: Readonly<Action> = {
        type: 'ANYTHING'
    }

    const after: Array<State> = [
        {id: 0, text: 'Hey', completed: false}
    ]

    expect(todos(before, action)).to.be.deep.equal(after)
})

it('should return initial state when state before is undefined', () => {
    const before = undefined
    const action: Action = {}
    const after = initialState

    expect(todos(before, action)).to.be.deep.equal(after)
})