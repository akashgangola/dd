import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Logo from "../public/logo.png";
import Link from "next/link";
import PopUp from "../Components/PopUp";
// import Fade from 'react-reveal/Fade';

const HeaderCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
  position: absolute;
`;
const HeaderSec1 = styled.div`
  width: 14rem;
  height: 7.2rem;
`;
const HeaderSec3 = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;
const Login = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom:0px;
  color: #2d3779;
  cursor: pointer;
`;
const SignUp = styled.button`
  width: 10.1rem;
  height: 4.8rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: #ffffff;
  background: #448dc9;
  border-radius: 3rem;
  border: none;
  
  cursor: pointer;
`;
const HeaderParent = styled.div`
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default function LoginHeader() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      {/* <Fade> */}
      <HeaderParent >
        <HeaderCon className="container">
          <HeaderSec1>
            <Image src={Logo} object="contain" />
          </HeaderSec1>
          <HeaderSec3>
            <Link href='/login'><Login>Login</Login></Link>
            <SignUp variant="primary" onClick={() => setModalShow(true)}>
              Sign Up
            </SignUp>
            <PopUp show={modalShow} onHide={() => setModalShow(false)} />
          </HeaderSec3>
        </HeaderCon>
      </HeaderParent>
      {/* </Fade> */}
    </>
  );
}
