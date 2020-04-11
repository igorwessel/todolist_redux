import React from "react";
import { connect } from "react-redux";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdSquare } from "react-icons/io";
import { ListItem, List } from "./styled";
import { State } from "reducers/todos";
import { Dispatch } from "redux";
import { toggleTodo } from "reducers/todos/actions-creator";
import * as filterActions from "reducers/visibility-filter/actions";

const TodoList = ({
  todos,
  handleToggleTodo,
  activeFilter,
}: {
  todos: Array<State>;
  handleToggleTodo: any;
  activeFilter: string;
}) => {
  return (
    <List>
      {todos
        // eslint-disable-next-line array-callback-return
        .filter((todo: State) => {
          switch (activeFilter) {
            case filterActions.SHOW_ALL:
              return true;

            case filterActions.SHOW_COMPLETED:
              return todo.completed;

            case filterActions.SHOW_ACTIVE:
              return !todo.completed;
          }
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
                  marginRight: 25,
                  maxWidth: "16px",
                }}
                onClick={handleToggleTodo(todo.id)}
              />
            ) : (
              <IoMdSquare
                size="100%"
                style={{
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

const mapStateToProps = (state: any) => ({
  todos: state.todos,
  activeFilter: state.visibilityFilter,
});

const mapDispatchtoProps = (dispatch: Dispatch) => ({
  handleToggleTodo: (id: string) => (e: Event) => {
    dispatch(toggleTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchtoProps)(TodoList);
