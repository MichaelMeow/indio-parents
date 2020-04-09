import React from 'react';
import styled from 'styled-components/macro';
import episode from '../assets/episode.png';
import Numbers from './Numbers';
import globals from '../styles';

const Breakdown = () => {
  return (
    <Container>
      <Text>Your child watched "Dora and Diego in the Time of Dinosaurs" today!</Text>
      <EpImage
        src={episode}
      />
      <Text>We went on a journey to rescue Baby Jaguar from the time of dinosaurs! Along the way we saw an Argentinosaurus – one of the largest dinosaurs ever with a very long neck, a Quetzalcoatlus (ket-zal-ko-AUGHT-less) – a flying dinosaur in the pterosaur (aka pterydactyl) family, and a Tyrannosaurus Rex -- one of the most ferocious dinosaurs we met!!</Text>
      <Numbers />
    </Container>
  )
}
export default Breakdown;

const EpImage = styled.img`
  display: flex;
  object-fit: cover;
  width: 944px;
  height: 500px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
  width: 944px;
`;

const Text = styled.div`
  font-size: ${globals.fontSizes.large};
  color: white;
  font-family: ${globals.fonts.condensed};
  margin: 20px 0;
`;
