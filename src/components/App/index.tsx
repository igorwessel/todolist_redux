import React from "react";
import { Container, Header, Main } from "./styled";
import Filter from "components/Filter";
import Form from "components/Form";
import TodoList from "components/TodoList";

const App = () => {
  return (
    <Container>
      <Header>
        <Form />
        <Filter />
      </Header>
      <Main>
        <TodoList />
      </Main>
    </Container>
  );
};

export default App;
