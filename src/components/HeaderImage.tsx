import styled from '@emotion/styled';
import React from 'react';
import config from '../config';

const HeaderImage = styled.div`
  background: url(${config.siteImage}) no-repeat center;
  background-size: auto 100%;
  width: 100vw;
  height: 30%;
  min-height: 200px;
`;

export default () => <HeaderImage />;
