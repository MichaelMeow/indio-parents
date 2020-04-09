import React from 'react';
import styled from 'styled-components/macro';
import globals from '../styles';

const Activities = () => {
  return (
    <Container>
      <Box />
      <TitleOutline>ACTIVTY SUGGESTIONS</TitleOutline>
      <Title>ACTIVTY SUGGESTIONS</Title>
      <Items>
        <Subtitle>Materials</Subtitle>
        <Item>
          <Number></Number>
          <Category>Playdough</Category>
        </Item>
        <Item>
          <Number></Number>
          <Category>Textured Objects (anything will do!)</Category>
        </Item>
        <Item>
          <Number></Number>
          <Category>Tray for easy clean up</Category>
        </Item>
      </Items>
      <Items>
        <Subtitle>Directions</Subtitle>
        <Category>Press balls of playdough onto various objects and observe the patterns that remain in the clay!  See if you can mimic anything that looks like dinosaur skin/hide.  Sometimes fossils only show part of a larger dinosaur and paleantologists - specialized fossil scientists - have to put the pieces together.</Category>
      </Items>
    </Container>
  )
}
export default Activities;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 944px;
  margin-left: 100px;
  margin-top: 200px;
`;

const Items = styled.div`
  margin: 100px 30px 20px 30px;
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
  margin: 20px 0;
  font-family: ${globals.fonts.condensed};
`;

const Title = styled.div`
  position: absolute;
  left: 200px;
  color: white;
  text-align: center;
  font-size: ${globals.fontSizes.larger};
  font-family: ${globals.fonts.fun};
  transform: translateY(10px);
  left: calc(50% - 312px);
`;

const Subtitle = styled.div`
  margin-bottom: 70px;
  color: ${globals.colors.darkPurple};
  text-align: left;
  font-size: ${globals.fontSizes.larger};
  font-family: ${globals.fonts.fun};
  -webkit-text-stroke: 4px ${globals.colors.fuchsia};
  transform: translateX(-110px) rotate(-8deg);
`;

const TitleOutline = styled.div`
  position: absolute;
  left: 200px;
  color: black;
  text-align: center;
  font-size: ${globals.fontSizes.larger};
  font-family: ${globals.fonts.fun};
  -webkit-text-stroke: 18px ${globals.colors.fuchsia};
  transform: translateY(10px);
  left: calc(50% - 312px);
`;

const Number = styled.div`
  font-Size: ${globals.fontSizes.big};
  font-family: ${globals.fonts.fun};
  background-color: ${globals.colors.green};
  border-radius: 2000px;
  width: 50px;
  height: 50px;
`;

const Category = styled.div`
  font-size: ${globals.fontSizes.large};
  margin-left: 20px;
  text-align: left;
  width: 700px;
  color: white;
  font-family: ${globals.fonts.condensed};
`;

const Box = styled.div`
  position: absolute;
  z-index: -1;
  border: 2px solid ${globals.colors.fuchsia};
  border-radius: 8px;
  height: 1200px;
  width: 928px;
  margin: 42px 8px;
  left: calc(50% - 472px);
`;
