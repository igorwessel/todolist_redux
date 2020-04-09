import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import todos from './todos'
import { ADD_TODO } from './actions'

interface action {
    type: string;
    payload: any;
}

interface after {
    id: number;
    text: string;
    completed: boolean
}

it('should todos is be a function', () => {
    expect(todos).to.be.a('function')
}) 

it('should add a todo', () => {
    const before = deepFreeze([])
    
    const action: action = deepFreeze({
        type: ADD_TODO,
        payload: {
            id: 0,
            text: 'Hey'
        }
    })
    const after: Array<after> = [{
        id: 0,
        text: 'Hey',
        completed: false,
    }]
    
    expect(todos(before, action)).to.be.deep.equal(after)
})