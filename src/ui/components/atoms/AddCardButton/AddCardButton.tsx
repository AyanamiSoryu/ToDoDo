import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

export const StyledButton = styled.div`
  border-radius: 100px;
  background: #f5f5f5;
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #202020;
  //box-shadow: 0 0 #e6e6e6;
  box-shadow: 3px 1px 10px 2px #e6e6e6;
`;

type AddCardButtonProps = {
  iteration: number;
  setIteration: React.Dispatch<React.SetStateAction<number>>;
};

const AddCardButton: React.FC<AddCardButtonProps> = (props) => {
  const { iteration, setIteration } = props;
  const storage = JSON.parse(localStorage.getItem('cardsList'));

  const handleCardList = () => {
    const newCard = {
      id: uuidv4(),
      label: 'New Card',
      text: 'Your lucky chance to make it more reasonable...'
    };
    setIteration(iteration + 1);
    storage.push(newCard);
    localStorage.setItem('cardsList', JSON.stringify(storage));
  };

  return <StyledButton onClick={handleCardList}>+</StyledButton>;
};

export default AddCardButton;
