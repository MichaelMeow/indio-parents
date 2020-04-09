import React from 'react';
import styled from 'styled-components/macro';
import globals from '../styles';
import skeleton from '../assets/skeleton.png';
import exhibit from '../assets/exhibit.png';
import beetle from '../assets/beetle.png';

const Activities = () => {
  return (
    <Container>
      <Box />
      <TitleOutline>WEEKEND TRIPS</TitleOutline>
      <Title>WEEKEND TRIPS</Title>
      <Skeleton
        src={skeleton}
      />
      <Subtitle>OMSI</Subtitle>
      <Text>1945 SE Water Ave, Portland, OR 97214</Text>
      <Exhibit
        src={exhibit}
      />
      <Subtitle>Oregon History Museum</Subtitle>
      <Text>1945 SE Water Ave, Portland, OR 97214</Text>
      <Beetle
        src={beetle}
      />
      <Subtitle>The Zymoglyphic Museum</Subtitle>
      <Text>1945 SE Water Ave, Portland, OR 97214</Text>
    </Container>
  )
}
export default Activities;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1024px;
  margin-top: 200px;
`;

const Skeleton = styled.img`
  margin-top: 120px;
  transform: scale(.85);
`;

const Exhibit = styled.img`
  transform: scale(.85);
  object-fit: cover;
  height: 350px;
`;

const Beetle = styled.img`
  transform: scale(.85);
  object-fit: cover;
  height: 360px;
`;

const Text = styled.div`
  color: lightgrey;
  align-items: center;
  margin: 10px 0 30px 76px;
  font-size: ${globals.fontSizes.normal};
  font-family: ${globals.fonts.condensed};
`;

const Title = styled.div`
  position: absolute;
  left: calc(50% - 312px);
  color: ${globals.colors.darkPurple};
  text-align: center;
  font-size: ${globals.fontSizes.larger};
  font-family: ${globals.fonts.fun};
  transform: translateY(10px);
`;

const Subtitle = styled.div`
  margin-left: 76px;
  text-align: left;
  font-size: ${globals.fontSizes.large};
  font-family: ${globals.fonts.condensed};
  color: ${globals.colors.yellow};
`;

const TitleOutline = styled.div`
  position: absolute;
  left: calc(50% - 312px);
  color: black;
  text-align: center;
  font-size: ${globals.fontSizes.larger};
  font-family: ${globals.fonts.fun};
  -webkit-text-stroke: 14px ${globals.colors.yellow};
  transform: translateY(10px);
`;

const Box = styled.div`
  position: absolute;
  z-index: -1;
  border: 2px solid ${globals.colors.yellow};
  border-radius: 8px;
  height: 1550px;
  width: 928px;
  margin: 50px 0;
  left: calc(50% - 472px);
`;
