import React from "react";
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
import {
  MdAddCircleOutline,
  MdCheckBoxOutlineBlank,
  MdSentimentNeutral,
} from "react-icons/md";
import { IoMdSquare } from "react-icons/io";
import { State } from "reducers/todos";
import { addTodo, toggleTodo } from "reducers/actions-creator";
import { connect } from "react-redux";

const App = ({
  todos,
  handleAddTodo,
  handleToggleTodo,
}: {
  todos: Array<State>;
  handleAddTodo: (e: React.FormEvent) => void;
  handleToggleTodo: (e: any) => void;
}) => {
  console.log(todos);
  return (
    <Container>
      <Header>
        <Form onSubmit={handleAddTodo}>
          <Input name="todo" />
          <ButtonWithIcon type="submit">
            <MdAddCircleOutline size={24} color="#fff" cursor="pointer" />
          </ButtonWithIcon>
        </Form>
        <FilterContainer>
          <Link>
            <MdCheckBoxOutlineBlank
              size={16}
              style={{ marginRight: 12 }}
              cursor="pointer"
            />
            Todos
          </Link>
          <Link>
            <IoMdSquare
              size={16}
              style={{ marginRight: 12 }}
              cursor="pointer"
            />
            Finalizado
          </Link>
          <Link>
            <MdSentimentNeutral
              size={16}
              style={{ marginRight: 12 }}
              cursor="pointer"
            />
            Em Progresso
          </Link>
        </FilterContainer>
      </Header>
      <Main>
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
                    maxHeight: "16px",
                  }}
                  onClick={() => handleToggleTodo(todo.id)}
                />
              ) : (
                <IoMdSquare
                  size="100%"
                  style={{
                    marginRight: 25,
                    maxWidth: "16px",
                    maxHeight: "16px",
                  }}
                  onClick={() => handleToggleTodo(todo.id)}
                />
              )}
              {todo.text}
            </ListItem>
          ))}
        </List>
      </Main>
    </Container>
  );
};

const mapStateToProps = (state: Array<State>) => ({
  todos: state,
});

const mapDispatchtoProps = (dispatch: any) => ({
  handleAddTodo: (e: any): void => {
    e.preventDefault();
    dispatch(addTodo(e.target?.todo.value));
    e.target.todo.value = "";
  },
  handleToggleTodo: (id: string) => {
    dispatch(toggleTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchtoProps)(App);
