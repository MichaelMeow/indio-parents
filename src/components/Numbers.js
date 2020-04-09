import React from 'react';
import styled from 'styled-components/macro';
import globals from '../styles';

const Numbers = () => {
  // this is example, comment out
  const search = new URLSearchParams('time=456&quest=6&ans=3');
  window.history.replaceState({}, '', `${window.location.pathname}?${search}`);
  // real code grabbing data from params
  const params = new URLSearchParams(window.location.search);
  const screenTime = Math.round(params.get('time')/60);
  const questionsAsked = params.get('quest');
  const correctAnswers = params.get('ans');
  return (
    <Container>
      <Line />
      <Items>
        <Item>
          <Number>{screenTime}</Number>
          <Category>MIN SCREEN TIME</Category>
        </Item>
        <Item>
          <Number>{questionsAsked}</Number>
          <Category>QUESTIONS</Category>
        </Item>
        <Item>
          <Number>{correctAnswers}</Number>
          <Category>CORRECT ANSWERS</Category>
        </Item>
      </Items>
      <Line />
    </Container>
  )
}
export default Numbers;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 944px;
`;

const Items = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${globals.colors.fuchsia};
`;

const Number = styled.div`
  font-Size: ${globals.fontSizes.huge};
  font-family: ${globals.fonts.fun};
`;

const Category = styled.div`
  font-size: ${globals.fontSizes.normal};
`;

const Line = styled.div`
  background-color: ${globals.colors.fuchsia};
  height: 2px;
  width: 944px;
  margin: 42px 0;
`;
