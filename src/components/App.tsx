import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';

import config from '../config';
import { rainbow } from '../emotion/keyframes';
import useTitle from '../hooks/useTitle';
import HeaderImage from './HeaderImage';
import News from './News';

const globalStyle = css`
  @import url('https://fonts.googleapis.com/css?family=Lato');

  * {
    font-family: 'Lato', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

const RainbowBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    124deg,
    #ff2400,
    #e81d1d,
    #e8b71d,
    #e3e81d,
    #1de840,
    #1ddde8,
    #2b1de8,
    #dd00f3,
    #dd00f3
  );
  background-size: 1800% 1800%;
  animation: ${rainbow} 18s ease infinite;
`;

export default function App() {
  useTitle(config.siteName);

  return (
    <RainbowBackground>
      <Global styles={globalStyle} />
      <HeaderImage />
      <News />
    </RainbowBackground>
  );
}
