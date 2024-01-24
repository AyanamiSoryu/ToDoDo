import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 14px;
`;

type DoneButtonProps = {
  isCardDone: boolean;
  setCardDone: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoneButton: React.FC<DoneButtonProps> = (props) => {
  const { isCardDone, setCardDone } = props;
  const handleOnButtonClick = () => {
    setCardDone(!isCardDone);
  };

  return <StyledButton onClick={() => handleOnButtonClick()}>{isCardDone ? '⌀' : '✓'}</StyledButton>;
};

export default DoneButton;
