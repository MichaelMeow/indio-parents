import React from 'react';
import styled from 'styled-components/macro';
import globals from '../styles';

const Questions = () => {
  return (
    <Container>
      <Box />
      <TitleOutline>TRY THESE QUESTIONS</TitleOutline>
      <Title>TRY THESE QUESTIONS</Title>
      <Items>
        <Item>
          <Number>?</Number>
          <Category>What dinosaurs did you learn about today?  How big were dinosaurs?</Category>
        </Item>
        <Item>
          <Number>?</Number>
          <Category>How did dinosaurs get around?  Did they walk?  Swim?  Fly?</Category>
        </Item>
        <Item>
          <Number>?</Number>
          <Category>Can dinosaurs have feathers?
            <Hint>HINT: Yes, we also learned about a half bird dinosaur today</Hint>
          </Category>
        </Item>
      </Items>
    </Container>
  )
}
export default Questions;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 944px;
  margin-left: 100px;
  margin-top: 100px;
`;

const Hint = styled.p`
  color: black;
  margin: 0px;
  font-size: ${globals.fontSizes.normal};
`;

const Items = styled.div`
  margin: 110px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  color: white;
  align-items: center;
  margin: 40px 0;
`;

const Title = styled.div`
  position: absolute;
  left: calc(50% - 312px);
  color: ${globals.colors.darkPurple};
  font-size: ${globals.fontSizes.larger};
  font-family: ${globals.fonts.fun};
`;

const TitleOutline = styled.div`
  position: absolute;
  left: calc(50% - 312px);
  color: black;
  font-size: ${globals.fontSizes.larger};
  font-family: ${globals.fonts.fun};
  -webkit-text-stroke: 10px ${globals.colors.fuchsia};
`;

const Number = styled.div`
  font-Size: ${globals.fontSizes.big};
  font-family: ${globals.fonts.fun};
  background-color: ${globals.colors.purple};
  border-radius: 2000px;
  width: 100px;
  height: 100px;
`;

const Category = styled.div`
  font-size: ${globals.fontSizes.large};
  color: white;
  font-family: ${globals.fonts.condensed};
  margin-left: 30px;
  text-align: left;
  width: 600px;
`;

const Box = styled.div`
  position: absolute;
  z-index: -1;
  background-color: ${globals.colors.fuchsia};
  height: 750px;
  width: 928px;
  margin: 42px 8px;
  left: calc(50% - 472px);
  border-radius: 5px;
`;
