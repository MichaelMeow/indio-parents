import React from 'react';
import styled from 'styled-components/macro';
import title from '../assets/title.png';

const Title = () => {
  return (
    <Image
      src={title}
    />
  )
}
export default Title;

const Image = styled.img`
  margin: 40px;
`;
