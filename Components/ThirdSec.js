import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
// import Zoom from 'react-reveal/Zoom';

const SecondSecCon = styled.div`
display: flex;
align-items: center;
flex-direction: row-reverse;
margin-top: 9rem;
`;
const SecondSec1 = styled.div`
  width: 70rem;
`;
const SecondSec2 = styled.div`
  width: calc(60rem + 90px);
  padding-right:90px;
`;
const Heading = styled.h1`
  font-size: 4.8rem;
  font-weight: 700;
  margin-bottom:1.8rem;
  color: #2d3779;
`;
const Text = styled.p`
  font-size: 1.8rem;
  color: #6d728e;
  font-weight: 400;
`;
const Button = styled.button`
  width: 15rem;
  height: 6rem;
  border-radius: 6rem;
  border: none;
  background: #448dc9;
  box-shadow: 0px 6px 50px rgba(68, 141, 201, 0.24);
  cursor: pointer;
  font-size: 1.6rem;
  color: #ffffff;
  font-weight: 600;
  margin-top: 2rem;
`;

export default function ThirdSec(props) {
  return (
    <SecondSecCon className="container section-wrap">
        {/* <Zoom bottom> */}
      <SecondSec1 className="pr90 block-1">
        <Image src={props.Img} object="contain" />
      </SecondSec1>
      <SecondSec2 className="block-2">
        <Heading>{props.SecondHeading}</Heading>
        <Text>{props.SecondText}</Text>
        <Link href="/patients"><Button>Read More</Button></Link>
      </SecondSec2>
      {/* </Zoom> */}
    </SecondSecCon>
  );
}
