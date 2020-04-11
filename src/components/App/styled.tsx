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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: orange;
  height: 90px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

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

export const ButtonWithIcon = styled.button`
  background-color: transparent;
  outline: 0;
  border: 0;
`;

export const List = styled.ul``;

export const ListItem = styled.li``;

export const Footer = styled.footer`
  display: flex;
  margin: 0 20px;
  justify-content: space-between;
`;

export const Link = styled.a``;
