import React, { useState } from 'react';
import styled from 'styled-components';

type CardLabelProps = {
  text: string;
  cardId: string;
  iteration: number;
  setIteration: React.Dispatch<React.SetStateAction<number>>;
};

const StyledLabel = styled.a`
  display: flex;
  //width: 405px;
  align-items: flex-start;
  color: #202020;
  font-family: serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 121.429%;
  letter-spacing: -0.59px;
  word-break: break-all;
`;
const StyledInput = styled.input`
  //font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 121.429%;
  //letter-spacing: -0.59px;
  display: flex;
  //align-self: center;
  padding: 5.7px 13px;
  width: 60%;
  //flex: 1 0 0;
  border: 1px solid #ebebeb;
  color: #202020;
  margin-top: 0;
`;

const CardLabel: React.FC<CardLabelProps> = (props) => {
  const [isOnClick, setIsOnClick] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const { text, cardId, iteration, setIteration } = props;
  const storage = JSON.parse(localStorage.getItem('cardsList'));

  if (!isOnClick && inputValue.length !== 0) {
    const newCardsList = storage.reduce((acc, card) => {
      if (card.id === cardId) {
        const newCard = {
          id: card.id,
          label: inputValue,
          text: card.text
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
    <StyledLabel onClick={() => setIsOnClick(!isOnClick)}>
      {isOnClick ? (
        <StyledInput
          placeholder={text}
          autoFocus
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            e.key === 'Enter' && setIsOnClick(false);
          }}
        />
      ) : (
        text
      )}
    </StyledLabel>
  );
};

export default CardLabel;
