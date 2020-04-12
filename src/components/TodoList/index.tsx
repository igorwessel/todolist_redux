import React from "react";
import { connect } from "react-redux";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdSquare } from "react-icons/io";
import { ListItem, List } from "./styled";
import { State } from "reducers/todos";
import { Dispatch } from "redux";
import { toggleTodo } from "reducers/todos/actions-creator";
import { Store } from "interfaces/index";
import * as filterActions from "reducers/visibility-filter/actions";

const TodoList = ({
  todos,
  handleToggleTodo,
  activeFilter,
}: {
  todos: Array<State>;
  handleToggleTodo: Function;
  activeFilter: string;
}) => {
  return (
    <List>
      {todos
        .filter((todo: State) => {
          const filterItems: any = {
            [filterActions.SHOW_ALL]: true,
            [filterActions.SHOW_COMPLETED]: todo.completed,
            [filterActions.SHOW_ACTIVE]: !todo.completed,
          };

          return filterItems[activeFilter];
        })
        .map((todo: State) => (
          <ListItem
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {!todo.completed ? (
              <MdCheckBoxOutlineBlank
                size="100%"
                style={{
                  marginLeft: 10,
                  marginRight: 25,
                  maxWidth: "16px",
                }}
                onClick={handleToggleTodo(todo.id)}
              />
            ) : (
              <IoMdSquare
                size="100%"
                style={{
                  marginLeft: 10,
                  marginRight: 25,
                  maxWidth: "16px",
                }}
                onClick={handleToggleTodo(todo.id)}
              />
            )}
            {todo.text}
          </ListItem>
        ))}
    </List>
  );
};

const mapStateToProps = (state: Store) => ({
  todos: state.todos,
  activeFilter: state.visibilityFilter,
});

const mapDispatchtoProps = (dispatch: Dispatch) => ({
  handleToggleTodo: (id: string) => (e: Event) => {
    dispatch(toggleTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchtoProps)(TodoList);
