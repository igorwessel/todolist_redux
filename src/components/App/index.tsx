import React from "react";
import {
  Container,
  Input,
  Header,
  Main,
  List,
  ListItem,
  Footer,
  Link,
  ActionsContainer,
} from "./styled";
import { MdAddCircleOutline } from "react-icons/md";

function App() {
  return (
    <Container>
      <Header>
        <ActionsContainer>
          <Input />
          <MdAddCircleOutline size={24} color="#fff" />
        </ActionsContainer>
      </Header>
      <Main>
        <List>
          <ListItem>Opa</ListItem>
        </List>
      </Main>
      <Footer>
        <Link>Todos</Link> | <Link>Finalizado</Link> | <Link>Em Progresso</Link>
      </Footer>
    </Container>
  );
}

export default App;
