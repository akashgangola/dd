import styled from "styled-components";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import BG from "../public/bg.png";
import SecondSec from "../Components/SecondSec";
import SecondSecImg from "../public/secondSec.png";
import ThirdSecImg from "../public/thirdSection.png";
import ThirdSec from "../Components/ThirdSec";
import ReadyToGetStarted from "../Components/ReadyToGetStarted";
import Footer from "../Components/Footer";

const HomeCon = styled.div`
 background-color: #f7f7fa;
`;
const ThirdSecParent = styled.div`
  width: 100%;
  height: 100rem;
  background-color: white;
`;
const ThirdSecContent = styled.div`
  padding-top: 2rem;
  margin-top: 8rem;
`;

export default function Home() {
  return (
    <HomeCon>
      <Header />
      <Hero
        backGround={BG}
        heading="More Impactful Patient Marketing Starts Here"
        text="Build trust and authenticity by connecting with highly-relevant patient influencers."
        buttonText="FOR PATIENTS"
        buttonText2="FOR COMPANIES"
      />
      <SecondSec
        Img={SecondSecImg}
        SecondHeading="Healthcare Marketing that Resonates with Your Audience"
        SecondText="Within the healthcare industry, patient influencers have pre-established trust with their audiences.
        Through our platform, we empower healthcare companies across all specialties to achieve more
        meaningful results from our growing network of vetted influencers. Every collaboration is tailored to
        your unique product or service offering.
        "
      />
      <ThirdSecParent>
        <ThirdSecContent>
          <ThirdSec
            Img={ThirdSecImg}
            SecondHeading="Driving Growth for
        Our Patient Influencers"
            SecondText="For patients struggling with health challenges, opportunities for compensation can feel few and far
        between. 
        By becoming a patient influencer, however, these individuals can transform their social
        media presence into a unique earning opportunity regardless of their audience’s size. All the
        while, Patients Influence offers tangible strategies to grow.
        "
          />
        </ThirdSecContent>
        <ReadyToGetStarted />
      </ThirdSecParent>
      <div style={{ marginTop: "24rem" }}>
        <Footer />
      </div>
    </HomeCon>
  );
}
