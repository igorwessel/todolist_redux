import { State } from "reducers/todos"

export interface Store {
    todos: Array<State>;
    visibilityFilter: string;
}