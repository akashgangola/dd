import styled from "styled-components";
import Image from "next/image";
import Logo from "../public/logo.png";
import LinkedInIcon from "../public/Linkedin.png";
import InstagramIcon from "../public/Instagram.png";
import YoutubeIcon from "../public/Youtube.png";
// import Fade from "react-reveal/Fade";

const FooterCon = styled.div`
  max-width: 104rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding-bottom:5.4rem;
`;
const Text = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  color: #2d3779;
  padding-top:2rem;
  padding-bottom:1rem;
  text-align: center;
`;
const IconsCon = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  padding-top:1rem;
  padding-bottom:3rem;
`;
const FooterLastSec = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: #2d3779;
`;
const FooterParent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Footer() {
  return (
    <FooterParent>
      {/* <Fade> */}
        <FooterCon>
          <Image src={Logo} />
          <Text>
            Build trust and authenticity by connecting with highly-relevant
            patient influencers. Within the healthcare industry, patient
            influencers have pre-established trust with their audiences.
          </Text>
          <IconsCon>
            <Image src={LinkedInIcon} />
            <Image src={InstagramIcon} />
            <Image src={YoutubeIcon} />
          </IconsCon>
          <FooterLastSec>
            Copyright © 2022{" "}
            <span style={{ fontWeight: "600", color: "#448DC9" }}>
              Patientsinfluence.com
            </span>{" "}
            | All rights reserved.
          </FooterLastSec>
        </FooterCon>
      {/* </Fade> */}
    </FooterParent>
  );
}
