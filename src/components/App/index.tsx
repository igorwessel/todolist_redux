import React, { useState } from "react";
import {
  Container,
  Input,
  Header,
  Main,
  List,
  ListItem,
  Link,
  Form,
  FilterContainer,
  ButtonWithIcon,
} from "./styled";
import { MdAddCircleOutline } from "react-icons/md";
import { State } from "reducers/todos";
import { addTodo } from "reducers/actions-creator";
import { connect } from "react-redux";

const App = ({
  todos,
  handleAddTodo,
}: {
  todos: Array<State>;
  handleAddTodo: (e: any) => void;
}) => {
  const [text, setText] = useState<string>("");

  console.log(todos);
  return (
    <Container>
      <Header>
        <Form onSubmit={handleAddTodo}>
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            name="todo"
          />
          <ButtonWithIcon type="submit">
            <MdAddCircleOutline size={24} color="#fff" />
          </ButtonWithIcon>
        </Form>
        <FilterContainer>
          <Link>Todos</Link>
          <Link>Finalizado</Link>
          <Link>Em Progresso</Link>
        </FilterContainer>
      </Header>
      <Main>
        <List>
          <ListItem>Opa</ListItem>
        </List>
      </Main>
    </Container>
  );
};

const mapStateToProps = (state: Array<State>) => ({
  todos: state,
});

const mapDispatchtoProps = (dispatch: any) => ({
  handleAddTodo: (e: any) => {
    e.preventDefault();
    dispatch(addTodo(e.target?.todo.value));
  },
});

export default connect(mapStateToProps, mapDispatchtoProps)(App);
