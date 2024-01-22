import React from 'react';
import styled from 'styled-components';

import PageLabel from '../../atoms/PageLabel/PageLabel';

type HeaderProps = {
  labelText: string;
};

const StyledHeader = styled.div``;

const Header: React.FC<HeaderProps> = (props) => {
  const { labelText } = props;

  return (
    <StyledHeader>
      <PageLabel pageLabelText={labelText} />
    </StyledHeader>
  );
};

export default Header;
