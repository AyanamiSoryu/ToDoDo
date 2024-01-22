import React from 'react';
import styled from 'styled-components';

type CardTextProps = {
  text: string;
};

const StyledText = styled.a`
  display: flex;
  //width: 405px;
  //padding: 24px;
  align-items: flex-start;
  flex-wrap: wrap;
  color: #202020;
  font-family: serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 121.429%;
  letter-spacing: -0.59px;
  //word-break: break-all;
`;

const CardText: React.FC<CardTextProps> = (props) => {
  const { text } = props;
  return <StyledText>{text}</StyledText>;
};

export default CardText;
