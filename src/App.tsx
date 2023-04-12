import Header from 'components/header/Header';
import ResponsiveHeader from 'components/header/ResponsiveHeader';
import WorldCupGame from 'components/worldcup/WorldCupGame';
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Home, Login, Register } from 'routes';

/* 프로필, 알림 팝업 기능 Header Component에 추가 예정 
import { RecoilRoot } from 'recoil';
import WorldCupGame from 'components/worldcup/WorldCupGame';
import Notify from 'components/header/Notify';
import MyInfo from 'components/header/MyInfo';
import 'assets/styles/Header.scss';
      <RecoilRoot>
        <Suspense>
          <Notify />
          <MyInfo />
        </Suspense>
      </RecoilRoot>;
*/

const queryClient = new QueryClient();

function App() {
  // 헤더 우측 햄버거 버튼 클릭시 on/off
  const [showSide, setShowSide] = useState(false);

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header showSide={showSide} setShowSide={setShowSide} />
          <ResponsiveHeader showSide={showSide} setShowSide={setShowSide} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<WorldCupGame />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
