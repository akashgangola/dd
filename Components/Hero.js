import styled from "styled-components";
import Image from "next/image";
// import Fade from 'react-reveal/Fade';
import Link from 'next/link'

const HeroCon = styled.div``;
const HeroSec = styled.div`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 70rem;
`;
const HeroContent = styled.div`
  width: 70.5rem;
`;
const Heading = styled.h1`
  font-size: 7.2rem;
  color: #ffffff;
  font-weight: 700;
  line-height: 8.2rem;
`;
const Text = styled.p`
  font-size: 2.4rem;
  color: #ffffff;
  font-weight: 400;
  opacity: 0.72;
  margin-top: 1rem;
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
`;
const HeroContentCon = styled.div`
  height:100%;
  align-items:center;
  display:flex;
`;

export default function Hero(props) {
  return (
    <HeroCon>
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
                <Link href='/patients'>
              <Button style={{ backgroundColor: "#448DC9" }}>
                {props.buttonText}
              </Button>
              </Link>
              <Link href='/companies'>
              <Button
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #FFFFFF",
                }}
              >
                {props.buttonText2}
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
