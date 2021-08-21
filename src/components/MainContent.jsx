import { react } from "@babel/types";
import React from "react";
import { useState } from "react";
import { ButtonGroup } from "react-bootstrap";
import "jest-styled-components";
import styled from "styled-components";
function MainContent() {
  const [counter, setCounter] = useState(0);
  const reset = () => {
    setCounter(0);
  };

  return (
    <>
      <h1>The counter page</h1>
      <Wrapper>
        <h3 data-testid="counter">{counter}</h3>
      </Wrapper>
      <Group>
        <Button data-testid="button-up" onClick={() => setCounter(counter + 1)}>
          {" "}
          Up
        </Button>
        <Button
          data-testid="button-down"
          onClick={() => setCounter(counter - 1)}
        >
          Down
        </Button>
        <Button className="reset" onClick={reset}>
          Reset
        </Button>
      </Group>
    </>
  );
}
export default MainContent;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  width: 50%;
  height: 100px;
  border: 3px solid black;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Group = styled.section`
  background-color: honeydew;
  width: 50%;
  height: 100px;
  border: 1px solid black;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
`;
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: "palevioletred";
  color: "white";

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
