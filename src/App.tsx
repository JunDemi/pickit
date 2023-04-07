import WorldCupGame from 'components/worldcup/WorldCupGame';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Register } from 'routes';
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
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<WorldCupGame />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
