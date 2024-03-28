import React from 'react';
import styled from 'styled-components';

const ContentsLayoutStyle = styled.div`
  width: 100%;
  height: 100vh;
  background: #f5efea;
`;

interface Props {
  children: React.ReactNode;
}

const ContentsLayout = ({ children }: Props) => {
  return <ContentsLayoutStyle>{children}</ContentsLayoutStyle>;
};

export default ContentsLayout;
