import styled from "styled-components";
import Image from "next/image";
import LoginHeader from "../Components/LoginHeader";
import BG from "../public/loginBG.png";

const LoginCon = styled.div``;
const LoginBackGround = styled.div`
  background-image: url(${BG.src});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  background-position: center;
`;
const LoginForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LoginInputsCon = styled.div`
  
`;
const LoginInputs = styled.div`
  width: 100%;
`;
const Heading = styled.h1`
  font-size: 3.5rem;
  color: #2d3779;
  font-weight: 700;
`;
const Text = styled.p`
  font-size: 1.6rem;
  color: #2d3779;
  opacity: 0.72;
  margin-top: 0.5rem;
`;
const Input = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 2.5rem;
`;
const Label = styled.label`
  font-size: 1.6rem;
  color: #2d3779;
  font-weight: 400;
`;
const TextInput = styled.input`
  width: 100%;
  height: 5.5rem;
  background-color: transparent;
  border: 1px solid #e5e5e5;
  color: #6d728e;
  font-size: 1.6rem;
  outline: none;
  padding-left: 1rem;
  margin-top: 0.5rem;
  border-radius:4px;
`;
const Button = styled.button`
  width: 16rem;
  height: 5.5rem;
  border-radius: 6rem;
  border: none;text-transform:uppercase;
  cursor: pointer;
  background: #448dc9;
  box-shadow: 0px 6px 50px rgba(68, 141, 201, 0.24);
  font-size: 1.6rem;
  color: #ffffff;
  font-weight: 600;
  margin-top: 2.7rem;
`;

export default function LogIn() {
  return (
    <LoginCon>
      <LoginHeader />
      <LoginForm className="container form-wrap">
        <LoginInputsCon className="form-left-wrap">
          <LoginInputs className="form-left">
            <Heading>Login Now</Heading>
            <Text>
            Access updates, new opportunities, and messages all in one place by logging in below.
            </Text>
            <Input>
              <Label>
                Email <span style={{ color: "#448DC9" }}>*</span>
              </Label>
              <TextInput type="email" placeholder="Email" />
            </Input>
            <Input>
              <Label>
              Password <span style={{ color: "#448DC9" }}>*</span>
              </Label>
              <TextInput type="password" placeholder="********" />
            </Input>
            <Button type="submit">Login Now</Button>
          </LoginInputs>
        </LoginInputsCon>
        <LoginBackGround className="fixed-background"></LoginBackGround>
      </LoginForm>
    </LoginCon>
  );
}
