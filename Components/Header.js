import React, { useState } from "react";
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
`;
const HeaderSec1 = styled.div`
  width: 14rem;
  height: 7.2rem;
`;
const HeaderSec2 = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
`;
const LinkText = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  color: #2d3779;
  cursor: pointer;
  margin-bottom:0px;
  &:hover {
    color: #448dc9;
    transition: 0.2s;
  }
`;
const HeaderSec3 = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
`;
const Login = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2d3779;
  cursor: pointer;
  margin-bottom:0px;
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
  text-transform:uppercase;
  cursor: pointer;
`;
const HeaderParent = styled.div`
  background-color: white;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const ToggleButton = styled.div`
  width:36px;
  position:absolute;
  right:15px;
  top:17px;
`;
export default function Header() {
  const [modalShow, setModalShow] = React.useState(false);
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* <Fade> */}
      <HeaderParent className="header-main mobile-handburg">
        <HeaderCon className={isActive ? 'show-sidebar container': 'container'} >
          <HeaderSec1>
            <Image src={Logo} object="contain" />
          </HeaderSec1>
          <HeaderSec2 className="header-mobile">
            <ToggleButton className="mobile-toggle nav-toggle"   onClick={toggleClass} >
            </ToggleButton>
            <Link href="/">
              <LinkText>Home</LinkText>
            </Link>
            <Link href="/companies">
              <LinkText>For Companies</LinkText>
            </Link>
            <Link href="/patients">
              <LinkText>For Patients</LinkText>
            </Link>
            <Link href="/ourstory">
              <LinkText>Our Story</LinkText>
            </Link>
            <Link href="/blog">
              <LinkText>Blog</LinkText>
            </Link>
            <Link href="/contact">
              <LinkText>Contact</LinkText>
            </Link>
          </HeaderSec2>
          <HeaderSec3>
          <Link href='/login'><Login>Login</Login></Link>
            <SignUp variant="primary" onClick={() => setModalShow(true)}>
              Sign Up
            </SignUp>
            <PopUp show={modalShow} onHide={() => setModalShow(false)} />
          </HeaderSec3>
          <ToggleButton className="mobile-toggle"   onClick={toggleClass} >

          </ToggleButton>
        </HeaderCon>
      </HeaderParent>
      {/* </Fade> */}
    </>
  );
}
