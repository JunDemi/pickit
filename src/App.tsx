import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import Register from 'routes/Register';
import Notify from 'components/header/Notify';
import MyInfo from 'components/header/MyInfo';

import 'assets/styles/Header.scss';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Suspense>
          <Notify />
          <MyInfo />
        </Suspense>
        <Register />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
