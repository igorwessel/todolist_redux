import React from "react";
import { connect } from "react-redux";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdSquare } from "react-icons/io";
import { ListItem, List } from "./styled";
import { State } from "reducers/todos";
import { Dispatch } from "redux";
import { toggleTodo } from "reducers/todos/actions-creator";

const TodoList = ({
  todos,
  handleToggleTodo,
}: {
  todos: Array<State>;
  handleToggleTodo: any;
}) => {
  return (
    <List>
      {todos.map((todo: State) => (
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
              onClick={() => handleToggleTodo(todo.id)}
            />
          ) : (
            <IoMdSquare
              size="100%"
              style={{
                marginRight: 25,
                maxWidth: "16px",
              }}
              onClick={() => handleToggleTodo(todo.id)}
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
});

const mapDispatchtoProps = (dispatch: Dispatch) => ({
  handleToggleTodo: (id: string): void => {
    dispatch(toggleTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchtoProps)(TodoList);
