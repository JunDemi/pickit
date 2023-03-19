import Header from '../components/header/Header';
import styled from 'styled-components';
import Banner from '../components/main/Banner';
import WorldCupCards from '../components/main/WorldCupCards';
import ResponsiveHeader from '../components/header/ResponsiveHeader';
import React, { Dispatch, SetStateAction, useState } from 'react';

export interface stateRule {
  showSide: boolean;
  setShowSide: Dispatch<SetStateAction<boolean>>;
}

const Main = (): JSX.Element => {
  const [showSide, setShowSide] = useState(false);
  const Container = styled.div`
    position: relative;
    width: 100%;
    height: max-content;
    background-color: #f3f3f3;
    padding: 3rem;

    @media screen and (max-width: 1200px) {
      padding: 0;
    }
  `;
  return (
    <div>
      <Header showSide={showSide} setShowSide={setShowSide} />
      <Container>
        <ResponsiveHeader showSide={showSide} setShowSide={setShowSide} />
        <Banner />
        <WorldCupCards />
      </Container>
    </div>
  );
};

export default Main;
