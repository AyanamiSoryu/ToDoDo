import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import AddCardButton from '../../atoms/AddCardButton/AddCardButton';
import Card from '../../organisms/Card/Card';

const StyledRoot = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

const StyledAddCardButtonContainer = styled.div`
  display: flex;
  margin-top: 5px;
`;

export type CardsData = {
  id: number;
  label: string;
  text: string;
};

const cardsListInitialValue = [
  {
    id: uuidv4(),
    label: 'Your first mind',
    text: 'You can change it anytime'
  }
];

const cardListInitialValueJSON = JSON.stringify(cardsListInitialValue);

localStorage.setItem(`cardsList`, cardListInitialValueJSON);

const CardZone = () => {
  const [iteration, setIteration] = useState(0);
  const storage = JSON.parse(localStorage.getItem('cardsList'));

  const handleCardRemove = (card) => {
    const filteredCardList = storage.filter((element) => element.id !== card.id);
    localStorage.setItem('cardsList', JSON.stringify(filteredCardList));
    setIteration(iteration - 1);
  };

  return (
    <StyledRoot>
      {storage.map((card) => {
        return (
          <Card
            text={card.label}
            cardRemoveFunction={() => handleCardRemove(card)}
            placeholderText={card.text}
            cardId={card.id}
            iteration={iteration}
            setIteration={setIteration}
          />
        );
      })}
      <StyledAddCardButtonContainer>
        <AddCardButton iteration={iteration} setIteration={setIteration} />
      </StyledAddCardButtonContainer>
    </StyledRoot>
  );
};

export default CardZone;
