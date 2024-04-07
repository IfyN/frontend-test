import {
  Container,
  Wrapper,
  ImageWrapper,
  LocationDetails,
  Button,
  Description,
} from "./infobox.styles";
import { useState } from "react";

export function Infobox(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <img src={props.image} />
          <button
            onClick={() => {
              setExpanded(!expanded);
            }}
          >
            {" "}
            {expanded
              ? "Read less about this hotel ⌄ "
              : "Read more about this hotel > "}
          </button>
        </ImageWrapper>
        <LocationDetails>
          <p> {props.name}</p>
          <p> {props.location}</p>
          <p>
            {Array.from({ length: props.rating })
              .fill(null)
              .map((_, index) => (
                <img
                  data-testid="star_rating"
                  src="/assets/star.png"
                  width="15px"
                  alt=""
                  key={index}
                />
              ))}{" "}
          </p>
          <p>
            {props.adult ? `${props.adult} adults,` : ""}{" "}
            {props.children ? `${props.children} children` : ""}
            {props.infant ? `, ${props.infant} infant` : ""}
          </p>
          <p>{props.date}</p>
          <p>{props.departure}</p>
          <Button>
            <span>Book now</span>
            <span className="price">{props.price}</span>
          </Button>
        </LocationDetails>
      </Wrapper>
      <Description>
        {expanded && (
          <div>
            <h4>Overview</h4>
            <p>{props.description}</p>
          </div>
        )}
      </Description>
    </Container>
  );
}
