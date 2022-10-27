import styled from "styled-components";
import Image from "next/image";
import ReadyGetStartedImg from '../public/readyToGetStarted.png' 
import Link from 'next/link'
// import Pulse from 'react-reveal/Pulse';

const ReadyToStartedCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 18rem;  
`;
const ReadyToGetStartedSSec = styled.div`
  height: 503px;
  background: linear-gradient(90deg, #2e77b3 0%, #2d3779 100%);
  border-radius: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left:82px;
  padding-right:150px;
  margin-bottom:-18rem;
`;
const ReadyToGetStartedSSec1 = styled.div`
width: 72rem;
`;
const Heading = styled.h1`
  font-size: 7.2rem;
  color: #ffffff;
  margin-bottom:4rem;
  font-weight: 700;
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-top: 2.8rem;
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
`;
const ReadyToGetStartedSSec2 = styled.div`
width: 47rem;
margin-top: -8.4rem;
`

export default function ReadyToGetStarted() {
  return (
    <ReadyToStartedCon className="container blue-block">
        {/* <Pulse> */}
      <ReadyToGetStartedSSec className="blue-wrap">
        <ReadyToGetStartedSSec1 className="col-lt">
          <Heading>Ready to Get Started?</Heading>
          <Buttons>
          
            <Link href='/companies'>
            <Button
              style={{
                backgroundColor: "transparent",
                border: "1px solid #FFFFFF",
              }}
            >
              FOR COMPANIES
            </Button>
            </Link>
            <Link href='/patients'>
              <Button style={{ backgroundColor: "#448DC9" }}>
              FOR PATIENTS
              </Button>
              </Link>
            </Buttons>
        </ReadyToGetStartedSSec1>
        <ReadyToGetStartedSSec2 className="col-rt">
            <Image src={ReadyGetStartedImg} object='contain' />
        </ReadyToGetStartedSSec2>
      </ReadyToGetStartedSSec>
      {/* </Pulse> */}
    </ReadyToStartedCon>
  );
}
