import styled from "styled-components";

export const Container = styled.article`
  background-color: #fff;
  font-size: small;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const ImageWrapper = styled.div`
  flex: 2 0 0;
  position: relative;
  color: #17317f;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button {
    all: unset;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 4px 8px;
    background-color: #fff;
  }
`;

export const LocationDetails = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #313137;
  font-size: small;
  padding: 10px;

  :nth-child(1) {
    color: #17317f;
    font-weight: 600;
  }

  p {
    margin: 0;
  }

  p:nth-child(2) {
    color: #808080;
  }
`;

export const ImageBack = styled.div`
  width: 100px;
`;

export const Button = styled.button`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  background-color: #fedc07;
  border: 1px solid #fedc07;
  border-radius: 3px;
  padding: 0.5rem 2rem;
  align-items: center;
  color: #17317f;

  span {
    padding: 1px;
  }

  span.price {
    font-size: 15px;
  }
`;

export const Description = styled.div`
  padding-left: 9px;
  color: #17317f;
  p {
    color: #808080;
  }
`;
