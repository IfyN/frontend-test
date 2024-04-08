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
  padding: 2rem 1rem;
  margin: 0 auto;
  max-width: 900px;

  @media (min-width: 900px) {
    display: flex;
    gap: 30px;
    padding: 100px 0;
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
  background-color: #fff;
  color: #17317f;
  width: 200px;
  padding: 8px;

  &.active {
    color: #fff;
    background-color: #17317f;
  }
`;
