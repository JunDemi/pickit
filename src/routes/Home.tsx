import ResponsiveMenu from 'components/header/ResponsiveMenu';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Banner from '../components/main/Banner';
import WorldCupCards from '../components/main/WorldCupCards';
import React from 'react';

export interface stateRule {
  showSide: boolean;
  setShowSide: Dispatch<SetStateAction<boolean>>;
}

const Main = (): JSX.Element => {
  const Container = styled.div`
    position: relative;
    width: 100%;
    height: max-content;
    background-color: #f3f3f3;
    padding: 3rem;
    margin: 2rem 0;

    @media screen and (max-width: 1200px) {
      padding: 0;
    }
  `;
  return (
    <div>
      <Container>
        <Banner />
        <WorldCupCards />
      </Container>
      <ResponsiveMenu />
    </div>
  );
};

export default Main;
