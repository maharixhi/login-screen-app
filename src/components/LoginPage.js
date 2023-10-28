// src/LoginPage.js

import React from 'react';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <Container>
      <LoginBox>
        <h2>Login</h2>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <SubmitButton>Submit</SubmitButton>
        <Divider>Or</Divider>
        <SocialLoginButtons>
          <SocialButton className="facebook">Facebook</SocialButton>
          <SocialButton className="google">Google</SocialButton>
        </SocialLoginButtons>
      </LoginBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const LoginBox = styled.div`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 350px;

  h2 {
    margin-bottom: 20px;
  }
}`;

const Input = styled.input`
  width: 95%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const Divider = styled.div`
  margin: 20px 0;
  color: #888;
  font-size: 14px;
`;

const SocialLoginButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialButton = styled.button`
  width: 100%;
  padding: 10px;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px 0;
  transition: background 0.3s;

  &.facebook {
    background: #3b5998;

    &:hover {
      background: #2d4784;
    }
  }

  &.google {
    background: #FF0000;

    &:hover {
      background: #b2071d;
    }
  }
}`;

export default LoginPage;
