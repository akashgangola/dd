import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
// import Bounce from "react-reveal/Bounce";

const SecondSecCon = styled.div`
  display: flex;
  align-items: center;
  margin-top: 9rem; 
`;
const SecondSec1 = styled.div`
  width: 70rem;
`;
const SecondSec2 = styled.div`
  width: calc(60rem + 90px);
  padding-left:90px;
`;
const Heading = styled.h1`
  font-size: 4.8rem;
  font-weight: 700;
  color: #2d3779;
  margin-bottom:1.8rem;
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

export default function SecondSec(props) {
  return (
    <SecondSecCon className="container section-wrap">
      {/* <Bounce left> */}
        <SecondSec1 className="block-1">
          <Image src={props.Img} object="contain" />
        </SecondSec1>
      {/* </Bounce> */}
      {/* <Bounce right> */}
        <SecondSec2 className="block-2 pl90">
          <Heading>{props.SecondHeading}</Heading>
          <Text>{props.SecondText}</Text>
          <Link href="/companies"><Button href="/companies">Read More</Button></Link>
        </SecondSec2>
      {/* </Bounce> */}
    </SecondSecCon>
  );
}
