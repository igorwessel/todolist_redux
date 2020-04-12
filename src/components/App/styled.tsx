import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
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
  background: rgba(0, 0, 0, 0.65);
  height: 90px;
`;

export const Main = styled.main`
  height: 100vh;
  overflow-y: scroll;
`;
