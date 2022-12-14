import styled from "styled-components";
import Image from "next/image";
import LoginHeader from "../Components/LoginHeader";
import BG from "../public/signUpBG.png";

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
`;
const Label = styled.label`
  font-size: 1.6rem;
  color: #2d3779;
  font-weight: 400;
`;
const TextInput = styled.input`
  width: 100%;
  height: 4.4rem;
  background-color: transparent;
  border: 1px solid #e5e5e5;
  color: #6d728e;
  font-size: 1.6rem;
  outline: none;
  margin-top: 0.5rem;
  padding-left: 1rem;
  border-radius:4px;
`;
const Button = styled.button`
  width: 16rem;
  height: 5rem;
  border-radius: 6rem;
  border: none;
  cursor: pointer;
  background: #448dc9;
  box-shadow: 0px 6px 50px rgba(68, 141, 201, 0.24);
  font-size: 1.6rem;
  color: #ffffff;
  text-transform:uppercase;
  font-weight: 600;
`;
const InfluencerSignUp = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
`;
const InputsGroup = styled.div``;
const InputSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Select = styled.select`
  height: 4.4rem;
  background-color: transparent;
  border: 1px solid #e5e5e5;
  color: #6d728e;
  font-size: 1.6rem;
  outline: none;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 0.5rem;
`;
const Option = styled.option``;
const AffiliateUser = styled.div`

`;

export default function SignUpInfluencer() {
  return (
    <LoginCon>
      <LoginHeader />
      <LoginForm className="container form-wrap">
        <LoginInputsCon className="form-left-wrap">
          <LoginInputs className="form-left">
            <Heading>Sign Up as Influencer</Heading>
            <Text className="mb-3 pb-4">
              Turn your voice into a force for positive change by signing up as a patient influencer below.
            </Text>
            <InfluencerSignUp className="contact-form">
              <Input className="half-col">
                <Label>
                  First Name <span style={{ color: "#448DC9" }}>*</span>
                </Label>
                <TextInput type="text" placeholder="Brandon" />
              </Input>
              <Input className="half-col">
                <Label>
                  Last Name <span style={{ color: "#448DC9" }}>*</span>
                </Label>
                <TextInput type="text" placeholder="Perry" />
              </Input>
              <Input className="half-col">
                <Label>
                  Username <span style={{ color: "#448DC9" }}>*</span>
                </Label>
                <TextInput type="text" placeholder="Username" />
              </Input>
              <Input className="half-col">
                <Label>
                  Email <span style={{ color: "#448DC9" }}>*</span>
                </Label>
                <TextInput type="email" placeholder="Email" />
              </Input>
              <Input className="full-width">
                <Label>
                  Password <span style={{ color: "#448DC9" }}>*</span>
                </Label>
                <TextInput type="password" placeholder="********" />
              </Input>
              <InputsGroup className="full-width">
                <Label className="full-width">
                  Affiliate Username <span style={{ color: "#448DC9" }}>*</span>
                </Label>
                <InputSelect >
                  <Select className="social-select"> 
                    <Option>Instagram</Option>
                    <Option>Facebook</Option>
                    <Option>Twitter</Option>
                  </Select>
                  <AffiliateUser className="type-affiliate">
                    <TextInput type="text" placeholder="Type Here" />
                  </AffiliateUser>
                </InputSelect>
              </InputsGroup>
              <Button type="submit" className="mt-4">Sign Up Now</Button>
            </InfluencerSignUp>
          </LoginInputs>
        </LoginInputsCon>
        <LoginBackGround className="fixed-background"></LoginBackGround>
      </LoginForm>
    </LoginCon>
  );
}
