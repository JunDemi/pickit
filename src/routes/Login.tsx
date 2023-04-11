import React from 'react';
import 'assets/styles/Login.scss';
import { ReactComponent as Banner } from 'assets/images/banner.svg';

function Login() {
  return (
    <div className="login-container">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
          alignItems: 'center',
          marginLeft: '50px',
        }}
      >
        <div
          style={{
            width: '60%',
            height: '70%',
          }}
        >
          <Banner style={{ width: '100%', height: '100%' }} />
        </div>
        <div
          style={{
            width: '40%',
            height: '70%',
            border: '1px solid black',
            marginLeft: '50px',
            marginRight: '50px',
          }}
        >
          test
        </div>
      </div>
    </div>
  );
}

export default Login;
