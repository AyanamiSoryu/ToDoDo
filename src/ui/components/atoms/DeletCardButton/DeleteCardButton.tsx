import React from 'react';
import styled from 'styled-components';

import { StyledButton } from '../AddCardButton/AddCardButton';

const StyledDeleteButton = styled(StyledButton)`
  transform: rotate(0.375turn);
  margin-left: auto;
  margin-bottom: auto;
`;

type DeleteCardButtonProps = {
  cardRemoveFunction: () => void;
};

const DeleteCardButton: React.FC<DeleteCardButtonProps> = (props) => {
  const { cardRemoveFunction } = props;
  return <StyledDeleteButton onClick={cardRemoveFunction}>+</StyledDeleteButton>;
};

export default DeleteCardButton;
