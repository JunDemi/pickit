import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
