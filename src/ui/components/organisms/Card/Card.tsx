import React, { useState } from 'react';
import styled from 'styled-components';

import CardInput from '../../atoms/CardInput/CardInput';
import DoneButton from '../../atoms/DoneButton/DoneButton';
import CardTop from '../CardTop/CardTop';

const StyledRoot = styled.div`
  position: relative;
  padding: 5px;
  width: 20%;
  //min-height: 60%;
  //background: azure;
  border: 1px solid #eceff133;
  border-radius: 24px;
`;

const StyledDoneContainer = styled.div`
  position: absolute;
  right: 5px;
  top: 48%;
`;

type CardProps = {
  text: string;
  cardRemoveFunction: () => void;
  placeholderText: string;
  cardId: string;
  iteration: number;
  setIteration: React.Dispatch<React.SetStateAction<number>>;
};

const Card: React.FC<CardProps> = (props) => {
  const { text, cardRemoveFunction, placeholderText, cardId, iteration, setIteration } = props;
  const [isCardDone, setCardDone] = useState<boolean>(false);

  return (
    <StyledRoot style={isCardDone ? { background: '#38d98d' } : { background: '#fff' }}>
      <CardTop
        labelText={text}
        cardRemoveFunction={cardRemoveFunction}
        cardId={cardId}
        iteration={iteration}
        setIteration={setIteration}
      />
      <StyledDoneContainer>
        <DoneButton isCardDone={isCardDone} setCardDone={setCardDone} />
      </StyledDoneContainer>
      <CardInput placeholderText={placeholderText} cardId={cardId} iteration={iteration} setIteration={setIteration} />
    </StyledRoot>
  );
};

export default Card;
