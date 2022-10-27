import styled from "styled-components";
import Header from "../Components/Header";
import Hero2 from "../Components/Hero2";
import BG from "../public/bg2.png";
import SecondSec from "../Components/SecondSec";
import SecondSecImg from "../public/companyImg1.png";
import ThirdSecImg from "../public/companyImg2.png";
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
  margin-top: 8rem;
`;

export default function Campaings() {
  return (
    <HomeCon className="common-remove-btn">
      <Header />
      <Hero2
        backGround={BG}
        heading="Go Beyond Traditional
        Healthcare Marketing Platforms"
        text="Overcome the challenges and legalities of direct-to-patient marketing with Patients Influence."
        buttonText="get started"
      />
      <SecondSec
        Img={SecondSecImg}
        SecondHeading="Accelerate Your Healthcare
        Marketing Strategy"
        SecondText="Whether you’re striving for more visits, prescriptions, or sales, Patients Influence accelerates your
        healthcare marketing strategy by pairing you with influencers who have a direct link to the people
        you need to reach.  
        As an intermediary between patients and your marketing message, Patients
        Influence preserves your anonymity while reaping the benefits of direct-to-patient marketing. Start
        targeting the right audience with performance-driven campaigns today
        "
      />
      <ThirdSecParent>
        <ThirdSecContent>
          <ThirdSec
            Img={ThirdSecImg}
            SecondHeading="Putting Our Algorithm
        to Work for You"
            SecondText="Marketing to patients requires costly R&D and time-intensive funnels.
        Instead, Patients Influence
        skips straight to results through a proprietary algorithm that precisely matches you with the ideal
        patient audience for your healthcare offering based on age, location, condition, and beyond. In turn,
        you can maximize your reach with unmatched relevance.
        
        "
          />
        </ThirdSecContent>
        <DiscoverPatient text={"Start Amplifying Your Exposure with Patients Influence"} />
      </ThirdSecParent>
      <div style={{ marginTop: "24rem" }}>
        <Footer />
      </div>
    </HomeCon>
  );
}
