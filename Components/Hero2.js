import styled from "styled-components";
import Image from "next/image";
import Link from 'next/link'
// import Fade from 'react-reveal/Fade';

const HeroCon = styled.div``;
const HeroSec = styled.div`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 70rem;
`;
const HeroContent = styled.div`
  max-width: 75rem;
`;
const Heading = styled.h1`
  font-size: 6.4rem;
  color: #ffffff;
  font-weight: 700;
  line-height: 8.2rem;
`;
const Text = styled.p`
  font-size: 2.4rem;
  color: #ffffff;
  font-weight: 400;
  opacity: 0.72;
  max-width: 72rem;
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-top: 5rem;
`;
const Button = styled.button`
  width: 19.4rem;
  height: 6rem;
  border-radius: 8rem;
  border: none;
  font-size: 1.6rem;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  text-transform:uppercase;
`;
const HeroContentCon = styled.div`
  height:100%;
  align-items:center;
  display:flex;
`;

export default function Hero2(props) {
  return (
    <HeroCon >
      <HeroSec
        style={{
          backgroundImage: `url(${props.backGround.src})`,
        }}
      >
        <HeroContentCon className="container banner-main">
            {/* <Fade> */}
          <HeroContent>
            <Heading>{props.heading}</Heading>
            <Text>{props.text}</Text>
            <Buttons>
              <Link href='/signupcompany'>
                <Button style={{ backgroundColor: "#448DC9" }}>
                  {props.buttonText}
                </Button>
              </Link>
            </Buttons>
          </HeroContent>
          {/* </Fade> */}
        </HeroContentCon>
      </HeroSec>
    </HeroCon>
  );
}
