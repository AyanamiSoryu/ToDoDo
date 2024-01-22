import React from 'react';
import styled from 'styled-components';

import CardLabel from '../../atoms/CardLabel/CardLabel';
import DeleteCardButton from '../../atoms/DeletCardButton/DeleteCardButton';

type CardTopProps = {
  labelText: string;
  cardRemoveFunction: () => void;
  cardId: string;
  iteration: number;
  setIteration: React.Dispatch<React.SetStateAction<number>>;
};

const StyledRoot = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px;
`;

const CardTop: React.FC<CardTopProps> = (props) => {
  const { labelText, cardRemoveFunction, cardId, iteration, setIteration } = props;
  return (
    <StyledRoot>
      <StyledTextContainer>
        <CardLabel text={labelText} cardId={cardId} iteration={iteration} setIteration={setIteration} />
      </StyledTextContainer>
      <DeleteCardButton cardRemoveFunction={cardRemoveFunction} />
    </StyledRoot>
  );
};

export default CardTop;
