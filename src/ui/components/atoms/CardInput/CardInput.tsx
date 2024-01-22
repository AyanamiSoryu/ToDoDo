import React, { useState } from 'react';
import styled from 'styled-components';

import CardText from '../CardText/CardText';

const StyledCardInput = styled.input`
  display: flex;
  //align-self: center;
  padding: 5.7px 13px;
  width: 85%;
  //flex: 1 0 0;
  border-radius: 100px;
  border: 1px solid #ebebeb;
  color: #202020;
`;

const StyledRoot = styled.div`
  display: flex;
  align-items: center;
  margin: 24px;
`;

type CardInputProps = {
  placeholderText: string;
  cardId: string;
  iteration: number;
  setIteration: React.Dispatch<React.SetStateAction<number>>;
};

const CardInput: React.FC<CardInputProps> = (props) => {
  const [isOnClick, setIsOnClick] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const { placeholderText, cardId, iteration, setIteration } = props;
  const storage = JSON.parse(localStorage.getItem('cardsList'));

  if (!isOnClick && inputValue.length !== 0) {
    const newCardsList = storage.reduce((acc, card) => {
      if (card.id === cardId) {
        const newCard = {
          id: card.id,
          label: card.label,
          text: inputValue
        };
        acc.push(newCard);
        return acc;
      }
      acc.push(card);
      return acc;
    }, []);
    localStorage.clear();
    localStorage.setItem('cardsList', JSON.stringify(newCardsList));
    setInputValue('');
    setIteration(iteration + 1);
  }

  return (
    <StyledRoot onClick={() => setIsOnClick(!isOnClick)}>
      {isOnClick ? (
        <StyledCardInput
          autoFocus
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && setIsOnClick(false)}
          placeholder={placeholderText}
        />
      ) : (
        <CardText text={placeholderText} />
      )}
    </StyledRoot>
  );
};

export default CardInput;
