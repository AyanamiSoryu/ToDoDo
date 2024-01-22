import React from 'react';
import styled from 'styled-components';

const StyledRoot = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  display: flex;
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

  return (
    <StyledRoot>
      <StyledButton onClick={() => handleOnButtonClick()}>{isCardDone ? 'Change' : 'Done'}</StyledButton>
    </StyledRoot>
  );
};

export default DoneButton;
