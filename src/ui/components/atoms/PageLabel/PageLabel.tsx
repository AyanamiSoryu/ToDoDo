import React from 'react';
import styled from 'styled-components';

type PageLabelProps = {
  pageLabelText: string;
};

const StyledPageLabel = styled.a``;

const PageLabel: React.FC<PageLabelProps> = (props) => {
  const { pageLabelText } = props;
  return <StyledPageLabel>{pageLabelText}</StyledPageLabel>;
};

export default PageLabel;
