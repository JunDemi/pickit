import React from 'react';
import '../assets/styles/Login.scss';
import { ReactComponent as Banner } from 'assets/images/banner.svg';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100%;
  top: 0;
  position: absolute;
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  margin-left: 50px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const BannerWrapper = styled.div`
  width: 60%;
  height: 60%;
`;

const LoginFormWrapper = styled.div`
  width: 40%;
  height: 60%;
  border: 1px solid black;
  margin-left: 50px;
  margin-right: 50px;
  padding: 50px 100px;
`;

const LoginMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: end flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`;

const FindId = styled.span`
  color: black;
  border-bottom: 1px solid black;
`;

const FindPwd = styled.span`
  color: black;
  border-bottom: 1px solid black;
`;

const Separator = styled.span`
  margin: 0px 10px 0px 10px;
`;

const InputSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
const InputBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputBox = styled.div`
  margin: 0px 30px 0px 30px;
  padding: 25px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  &:nth-child(n + 1) {
    margin-top: 10px;
  }
`;

const Input = styled.input`
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.1rem;
  color: black;
`;

function Login() {
  return (
    <Container>
      <MainWrapper>
        <BannerWrapper>
          <Banner style={{ width: '100%', height: '100%' }} />
        </BannerWrapper>
        <LoginFormWrapper>
          <form>
            <LoginMainWrapper>
              <TitleSection>
                <Title>로그인</Title>
                <div>
                  <FindId>아이디 찾기</FindId>
                  <Separator>|</Separator>
                  <FindPwd>비밀번호 찾기</FindPwd>
                </div>
              </TitleSection>
              <InputSectionWrapper>
                <InputBoxWrapper>
                  <InputBox>
                    <Input type="text" placeholder="아이디" />
                    {/* <input
                      // {...register('email', { required: true })}
                      className="register-input"
                      type="text"
                      // aria-invalid={errors.email ? 'true' : 'false'}
                    /> */}
                  </InputBox>
                  <InputBox>
                    <Input type="password" placeholder="패스워드" />
                    {/* <input
                      // {...register('email', { required: true })}
                      className="register-input"
                      type="text"
                      // aria-invalid={errors.email ? 'true' : 'false'}
                    /> */}
                  </InputBox>
                  {/* {errors.email?.type === 'required' && (
                    <p className="alert" role="alert">
                      이메일을 입력하세요.
                    </p>
                  )} */}
                </InputBoxWrapper>
              </InputSectionWrapper>
            </LoginMainWrapper>
          </form>
        </LoginFormWrapper>
      </MainWrapper>
    </Container>
  );
}

export default Login;
