import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #bbb;
  width: 100%;
  height: 100vh;
  max-width: 400px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 15px;
  justify-content: space-between;
  background-color: orange;
  height: 90px;
`;

export const ActionsContainer = styled(Header)``;

export const Input = styled.input`
  background-color: white;
  width: 100%;
  padding: 10px;
  margin-right: 10px;
  border: 0;
  border-radius: 20px;
  outline: none;
`;

export const Main = styled.main`
  height: 100vh;
`;

export const List = styled.ul``;

export const ListItem = styled.li``;

export const Footer = styled.footer`
  display: flex;
  margin: 0 20px;
  justify-content: space-between;
`;

export const Link = styled.a``;
