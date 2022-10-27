import styled from "styled-components";
import Header from "../Components/Header";
import Hero2 from "../Components/Hero2";
import BG from "../public/bg3.png";
import SecondSec from "../Components/SecondSec";
import SecondSecImg from "../public/patientImg1.png";
import ThirdSecImg from "../public/patientImg2.png";
import ThirdSec from "../Components/ThirdSec";
import DiscoverPatient from "../Components/DiscoverPatient";
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
  margin-top: 12rem;
`;

export default function Patients() {
  return (
    <HomeCon className="common-remove-btn">
      <Header />
      <Hero2
        backGround={BG}
        heading="Empower Your Network 
        While Elevating Your Earnings"
        text="Overcome the challenges and legalities of direct-to-patient marketing with Patients Influence."
        buttonText="get started"
      />
      <SecondSec
        Img={SecondSecImg}
        SecondHeading="Patient-Founded.
        Patient-Focused."
        SecondText="Just three years ago, our founder was diagnosed with Non-Hodgkin’s Lymphoma. Luckily, he was
        cured and went on to not only win a fitness competition, but also graduate at the top of his class.
        Inspired to make an even broader impact, he joined Roche, the pharmaceutical company that saved
        his life. In the process of creating life-saving digital solutions, he recognized a key gap that could
        improve the lives of patients through the power of patient influencer marketing. That’s when
        Patients Influence was born.
        
        "
      />
      <ThirdSecParent className="height-remove">
        <ThirdSecContent>
          <ThirdSec
            Img={ThirdSecImg}
            SecondHeading="Support Your Network
        with Relevant Content"
            SecondText="As a patient seeking to support your network, Patients Influence pairs you with relevant healthcare
        products and services related directly to your unique audience. 
        By simply posting, you can not only
        elevate your audience’s wellbeing, but also earn revenue along the way. As we train you on the best
        strategies to boost engagement, you can watch your passive income soar.
        
        "
          />
        </ThirdSecContent>
        <DiscoverPatient text={"Empower Your Network While Elevating Your Earnings"}/>
      </ThirdSecParent>
      <div style={{ marginTop: "24rem" }}>
        <Footer />
      </div>
    </HomeCon>
  );
}
