import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  height: 100vh; 
  width: 1000px; // 수정: 오타 수정 'weight' -> 'width'
`;

const InputContainer = styled.div`
  width: 80%; // 입력 필드를 감싸는 컨테이너에 동일한 너비 지정
  margin-bottom: 10px; // 각 입력 필드 사이의 간격
`;

const Label = styled.label`
  align-self: flex-start;
  margin-bottom: 1px;
  color: #333;
  font-weight: bold;
`;

const InputField = styled.input`
  padding: 20px;
  padding-right: 40px; 
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%; 
`;

const ErrorMessage = styled.div`
  color: red;
  height: 50px;
`;

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%; 
  border-radius: 30px;
  border: none;
  background-color: #ccc; // 수정: 초기 색상을 회색으로 설정
  color: white;
  margin-top: 20px; 
  cursor: pointer;
  font-weight: bold;
  padding: 15px;
  &:hover {
    background-color: rgb(20, 32, 62); // 마우스 오버 시 색상 변경
  }
`;

const PasswordInputContainer = styled.div`
  position: relative;
`;

const KeyIcon = styled.button`
  position: absolute;
  right: 10px; 
  top: 50%;
  transform: translateY(-50%);
  z-index: 10; 
  background: transparent;
  border: none;
  cursor: pointer;
  color: #ccc;
`;

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPasswordOptions, setShowPasswordOptions] = useState(false);
    const navigate = useNavigate();
  
    const validateEmail = (email) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };
  
    const handleLogin = (e) => {
      e.preventDefault();
      let isValid = true;
  
      if (!validateEmail(email)) {
        setEmailError('올바른 이메일을 입력해주세요.');
        isValid = false;
      } else {
        setEmailError('');
      }

      if (password === '') {
        setPasswordError('형식에 맞춰 비밀번호를 입력해주세요.');
        isValid = false;
      } else {
        setPasswordError('');
      }
  
      if (isValid) {
        if (email === 'user@example.com' && password === 'password') {
            console.log('로그인 성공!');
            navigate('/'); 
        } else {
            alert('이메일 또는 비밀번호가 잘못되었습니다.');
        }
      }
    };
  
    return (
        <LoginPageContainer>
          <h2>이메일과 비밀번호를 입력해주세요</h2>
          
          <InputContainer>
            <Label htmlFor="email">이메일 주소</Label>
            <InputField
              id="email"
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ErrorMessage>{emailError}</ErrorMessage>
          </InputContainer>
          
          <InputContainer>
            <Label htmlFor="password">비밀번호</Label>
            <PasswordInputContainer>
              <KeyIcon
                onClick={() => setShowPasswordOptions(!showPasswordOptions)}
              >
                🔑
              </KeyIcon>
              <InputField
                id="password"
                type="password"
                placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPasswordOptions && (
                <div>
                  <button onClick={() => setPassword('비밀번호')}>암호...</button>
                  <button onClick={() => setPassword('새로운암호')}>새로운 암호 제안</button>
                </div>
              )}
            </PasswordInputContainer>
            <ErrorMessage>{passwordError}</ErrorMessage>
          </InputContainer>

          <SubmitButton onClick={handleLogin}>확인</SubmitButton>
        </LoginPageContainer>
    );
}

export default Login;
