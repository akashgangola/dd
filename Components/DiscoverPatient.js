import styled from "styled-components";
import Image from "next/image";
import ReadyGetStartedImg from "../public/readyToGetStarted.png";
import Link from 'next/link'
// import Pulse from 'react-reveal/Pulse';

const ReadyToStartedCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 13rem;
`;
const ReadyToGetStartedSSec = styled.div`
  height: 506px;
  background: linear-gradient(90deg, #2e77b3 0%, #2d3779 100%);
  border-radius: 4rem;
  display: flex;
  align-items: center;
  width:100%;
  justify-content: space-around;
  margin-bottom:-20rem;
`;
const ReadyToGetStartedSSec1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Heading = styled.h1`
  font-size: 6.0rem;
  color: #ffffff;
  font-weight: 700;
  max-width:990px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
const Button = styled.button`
  width: 18.4rem;
  height: 5.5rem;
  border-radius: 8rem;
  border: none;
  font-size: 1.6rem;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  text-transform:uppercase;
  margin-top: 2.5rem;
`;

export default function DiscoverPatient(props) {
  return (
    <ReadyToStartedCon className="container blue-block">
        {/* <Pulse> */}
      <ReadyToGetStartedSSec className="blue-wrap discover-wrap">
        <ReadyToGetStartedSSec1>
          <Heading>{props.text}</Heading>
          <Link href='/signupcompany'>
            <Button style={{ backgroundColor: "#448DC9" }}>Get Started</Button>
          </Link>
        </ReadyToGetStartedSSec1>
      </ReadyToGetStartedSSec>
      {/* </Pulse> */}
    </ReadyToStartedCon>
  );
}
