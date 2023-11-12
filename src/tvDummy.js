import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
`;

const Label = styled.label`
  align-self: flex-start;
  margin-bottom: 1px;
  color: #333;
  font-weight: bold;
`;

const InputField = styled.input`
  margin: 10px 0; 
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 80%; 
`;

const ErrorMessage = styled.div`
  color: red;
  height: 20px;
  align-self: flex-start;
  margin-left: 10%; // 오류 메시지 위치 조정
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  border-radius: 30px;
  border: none;
  background-color: ${(props) => (props.disabled ? '#ccc' : 'rgb(20, 32, 62)')};
  color: white;
  margin-top: 20px; 
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  font-weight: bold;
  width: 80%; 
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateEmail(email) && validatePassword(password)) {
      console.log('로그인 성공!');
      navigate('/'); // 홈으로 리디렉션
    } else {
      if (!validateEmail(email)) {
        setEmailError('올바른 이메일을 입력해주세요.');
      }
      if (!validatePassword(password)) {
        setPasswordError('형식에 맞춰 비밀번호를 입력해주세요.');
      }
    }
  };

  return (
    <LoginPageContainer>
      <h2>이메일과 비밀번호를 입력해주세요</h2>
      <Label htmlFor="email">이메일 주소</Label>
      <InputField
        id="email"
        type="email"
        placeholder="email@example.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setEmailError('');
        }}
      />
      <ErrorMessage>{emailError}</ErrorMessage>
      
      <Label htmlFor="password">비밀번호</Label>
      <InputField
        id="password"
        type="password"
        placeholder="영문, 숫자, 특수문자 포함 8자 이상"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setPasswordError('');
        }}
      />
      <ErrorMessage>{passwordError}</ErrorMessage>
      
      <SubmitButton
        onClick={handleLogin}
        disabled={!validateEmail(email) || !validatePassword(password)}
      >
        확인
      </SubmitButton>
    </LoginPageContainer>
  );
}

export default Login;
