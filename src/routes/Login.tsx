import React, { useEffect } from 'react';
import '../assets/styles/Login.scss';
import styled from 'styled-components';
import { ReactComponent as Banner } from 'assets/images/banner.svg';
import { SubmitHandler, useForm } from 'react-hook-form';
import api from 'service';
import { useRecoilState } from 'recoil';
import { atomAccessToken } from 'store/stateStore';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100%;
  top: 0;
  position: absolute;
  background-color: whitesmoke;
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
  background-color: white;
  border: 4px solid black;
`;

const LoginFormWrapper = styled.div`
  width: 40%;
  height: 60%;
  border: 4px solid black;
  border-radius: 20px;
  margin-left: 50px;
  margin-right: 50px;
  padding: 50px 100px;
  @media (max-width: 1440px) {
    padding: 15px 45px;
  }
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

  @media (max-width: 1440px) {
    margin-top: 20px;
  }
`;

const InputBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 1440px) {
    width: 100%;
  }
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

  @media (max-width: 1440px) {
    padding: 10px;
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

const InteractSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px 30px;
`;

const InputButton = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
  padding: 0.5rem 1rem;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;

  display: inline-block;
  width: auto;

  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const LoginButton = styled(InputButton)`
  background-color: black;
  color: white;
  border: 0;
  width: 100%;

  &:hover {
    background-color: rgb(85, 80, 80);
  }
`;

const Description = styled.span`
  margin: 60px 0px 20px 0px;

  @media (max-width: 1440px) {
    margin: 40px 0px 20px 0px;
  }
`;

const RegisterButton = styled(InputButton)`
  background-color: black;
  color: white;
  border: 0;
  width: 50%;

  &:hover {
    background-color: rgb(85, 80, 80);
  }
`;

interface LoginInfo {
  username: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();

  const [accessToken, setAccessToken] = useRecoilState(atomAccessToken);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<any>();

  const onSubmit: SubmitHandler<LoginInfo> = async (data) => {
    try {
      let resData = await api.post('/auth/login', data);
      const token = await resData.data.data.token;
      setAccessToken(token);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const moveToRegister = () => {
    navigate('/register');
  };

  useEffect(() => {
    if (accessToken) {
      navigate('/');
    }
  }, [accessToken]);

  return (
    <Container>
      <MainWrapper>
        <BannerWrapper>
          <Banner style={{ width: '100%', height: '100%' }} />
        </BannerWrapper>
        <LoginFormWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                    <Input
                      {...register('username', { required: true })}
                      type="text"
                      placeholder="아이디"
                      aria-invalid={errors.username ? 'true' : 'false'}
                    />
                    {/* <input
                      // {...register('email', { required: true })}
                      className="register-input"
                      type="text"
                      // aria-invalid={errors.email ? 'true' : 'false'}
                    /> */}
                  </InputBox>
                  {errors.username?.type === 'required' && (
                    <p className="alert" role="alert">
                      이메일을 입력하세요.
                    </p>
                  )}
                  <InputBox>
                    <Input
                      {...register('password', { required: true })}
                      type="password"
                      placeholder="패스워드"
                      aria-invalid={errors.password ? 'true' : 'false'}
                    />
                    {/* <input
                      // {...register('email', { required: true })}
                      className="register-input"
                      type="text"
                      // aria-invalid={errors.email ? 'true' : 'false'}
                    /> */}
                  </InputBox>
                  {errors.password?.type === 'required' && (
                    <p className="alert" role="alert">
                      패스워드를 입력하세요.
                    </p>
                  )}
                </InputBoxWrapper>
              </InputSectionWrapper>
              <InteractSectionWrapper>
                <LoginButton type="submit" value={'로그인'} />
                <Description> 이미 생성된 계정이 있으시다면?</Description>
                <RegisterButton
                  type="button"
                  value={'계정 생성'}
                  onClick={moveToRegister}
                />
              </InteractSectionWrapper>
            </LoginMainWrapper>
          </form>
        </LoginFormWrapper>
      </MainWrapper>
    </Container>
  );
}

export default Login;
