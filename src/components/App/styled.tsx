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

export const Main = styled.main`
  height: 100vh;
  overflow-y: auto;
`;
