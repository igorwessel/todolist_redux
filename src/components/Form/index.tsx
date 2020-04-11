import React from "react";
import { Input, ButtonWithIcon, FormStyled } from "./styled";
import { MdAddCircleOutline } from "react-icons/md";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addTodo } from "reducers/todos/actions-creator";

const Form = ({ handleAddTodo }: { handleAddTodo: any }) => {
  return (
    <FormStyled onSubmit={handleAddTodo}>
      <Input name="todo" />
      <ButtonWithIcon type="submit">
        <MdAddCircleOutline size={24} color="#fff" cursor="pointer" />
      </ButtonWithIcon>
    </FormStyled>
  );
};

const mapDispatchtoProps = (dispatch: Dispatch) => ({
  handleAddTodo: (e: any): void => {
    e.preventDefault();
    dispatch(addTodo(e.target?.todo.value));
    e.target.todo.value = "";
  },
});

export default connect(null, mapDispatchtoProps)(Form);
