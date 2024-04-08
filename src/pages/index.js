import { Infobox } from "@/components/infobox";
import { data } from "../../data";
import { useState } from "react";
import {
  Background,
  Container,
  GlobalStyle,
  InfoboxContainer,
  ButtonContainer,
  SortButton,
} from "./index.styles";
import { sortByAlphabet, sortByPrice, sortByRating } from "../utils";

export default function Index() {
  const [sorting, setSorting] = useState("price");
  let sorted;
  switch (sorting) {
    case "price":
      sorted = sortByPrice(data);
      break;
    case "alphabetically":
      sorted = sortByAlphabet(data);
      break;

    case "rating":
      sorted = sortByRating(data);
      break;
  }

  return (
    <>
      <GlobalStyle />
      <Background>
        <Container>
          <ButtonContainer>
            <SortButton
              className={sorting === "alphabetically" ? "active" : ""}
              onClick={() => {
                setSorting("alphabetically");
              }}
            >
              sort <b>alphabetically</b>
            </SortButton>
            <SortButton
              className={sorting === "price" ? "active" : ""}
              onClick={() => {
                setSorting("price");
              }}
            >
              sort by <b>price</b>
            </SortButton>
            <SortButton
              className={sorting === "rating" ? "active" : ""}
              onClick={() => {
                setSorting("rating");
              }}
            >
              sort by <b>star rating</b>
            </SortButton>
          </ButtonContainer>
          <InfoboxContainer>
            {sorted.map((item) => {
              return <Infobox {...item} key={item.id} />;
            })}
          </InfoboxContainer>
        </Container>
      </Background>
    </>
  );
}
