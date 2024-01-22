import React from 'react';
import styled from 'styled-components';

import Header from '../components/molecules/Header/Header';
import CardZone from '../components/templates/CardZone/CardZone';

const StyledRoot = styled.div`
  background: #212121;
  height: 100vh;
`;

const App = () => {
  // const [state, setState] = useState<boolean>(false);
  return (
    <StyledRoot>
      <Header labelText='Huy.INC' />
      <CardZone />
    </StyledRoot>
  );
};

export default App;
