import Header from 'components/header/Header';
import ResponsiveHeader from 'components/header/ResponsiveHeader';
import WorldCupGame from 'components/worldcup/WorldCupGame';
import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Home, Login, Register } from 'routes';
import { useRecoilValue } from 'recoil';
import { atomAccessToken } from 'store/stateStore';

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

  const accessToken = useRecoilValue(atomAccessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    }
  }, [accessToken]);

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
