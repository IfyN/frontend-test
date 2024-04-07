import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap')
</style>
  *{
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif ;
  }

  button{
    all: unset;
  }
`;

export const Background = styled.div`
  background-image: url("/assets/background.png");
  background-repeat: repeat-x;
`;

export const Container = styled.div`
  @media (min-width: 900px) {
    display: flex;
    gap: 30px;
  }

  max-width: 900px;
  margin: 0 auto;
  padding: 100px 0;

  @media (min-width: 400px) {
    padding: 10zz0px 50px;
  }
`;

export const InfoboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  :not(:last-child) {
    border-bottom: 1px solid #17317f;
  }
  padding-bottom: 10px;
`;

export const SortButton = styled.button`
  background-color: ${(props) => (props.active ? "#17317f" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#17317f")};
  width: 200px;
  padding: 8px;
`;
