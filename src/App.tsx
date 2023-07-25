import React from 'react';
import styled from 'styled-components';
import { fullLogoMain } from './assets/images';
import { convertTZ } from './utils';
import Login from 'components/login/Login';
import { Footer } from 'components/layout';

function App() {
  return (
    <div>
      {fullLogoMain}
      <h1>new MunchSkill App!</h1> <S.Layout>{convertTZ()}</S.Layout>
      <Login />
      <Footer />
    </div>
  );
}

namespace S {
  export const Layout = styled.div`
    background-color: ${(props) => props.theme.color.black};
    ${({ theme }) => theme.media.mobileL`background-color: white`}
  `;
}
export default App;
