import React from 'react';
import Title from '../components/Title';
import Breakdown from '../components/Breakdown';
import Questions from '../components/Questions';
import Activities from '../components/Activities';
import Trips from '../components/Trips';
import styled from 'styled-components/macro';
import bg from '../assets/bg.png';
import globals from '../styles';

const Main = () => {
  return (
    <Container>
      <Background
      src={bg}
      />
      <Content>
        <Title />
        <Breakdown />
        <Questions />
        <Activities />
        <Trips />
      </Content>
    </Container>
  )
}
export default Main;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 5708px;
  display: flex;
  background-color: ${globals.colors.darkPurple};
`;


const Content = styled.div`
  width: 1024px;
  z-index: 2;
`;

const Background = styled.img`
  position: absolute;
  top: 0;
  left: calc(50% - 512px);
  z-index: 1;
  filter: brightness(80%);
`;
