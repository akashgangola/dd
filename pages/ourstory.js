import styled from "styled-components";
import Header from "../Components/Header";
import Hero3 from "../Components/Hero3";
import BG from "../public/bg4.png";
import Slider from "../Components/Slider";
import Footer from "../Components/Footer";

const OurStoryCon = styled.div`
background-color: white;
padding-bottom: 3rem;
`;
const OurStoryParent = styled.div`
 background-color: #f7f7fa;   
`;
const OurStoryContent = styled.div`
width: 100%;
`;
const Heading = styled.h1`
  font-size: 3.8rem;
  color: #2d3779;
  font-weight: 700;
`;
const Text = styled.p`
  font-size: 1.6rem;
  color: #6d728e;
  font-weight: 400;
  margin-top: 1rem;
`;
const OurStoryContentParent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
  width: calc(60rem + 90px);
`;
const SliderContentCon = styled.div`
display: flex;
align-items: center;
justify-content: center;
 margin:12rem auto;
`;

export default function OurStory() {
  return (
    <OurStoryParent >
    <OurStoryCon>
      <Header />
      <Hero3
        backGround={BG}
        heading="Our Story"
        text="Committed to patients worldwide and the companies who serve them, our Patients Influence family was founded by a Non-Hodgkin's Lymphoma survivor inspired to make a global impact.        "
        buttonText="get started"
      />
      <SliderContentCon className="container section-wrap my-xs">
      <Slider className="block-1 " />
      <OurStoryContentParent className="block-2 pl90">
        <OurStoryContent>
          <Heading>Who We Are</Heading>
          <Text>
            The healthcare industry is increasingly becoming more competitive,
            with patients now demanding a higher level of service quality. This
            study aims to model the impact of service quality (medical care
            procedures, administrative practices, hospital image,
            trustworthiness, patient safety, infrastructure, personnel quality)
            on patient satisfaction. Using a structured questionnaire, data were
            gathered from 194 patients from public and private hospitals in
            Melaka and Johor.
            <br />
            The data were analyzed using a second-generation analytical
            software, SmartPLS. The results suggest the model can explain 58
            percent of the variance in patient satisfaction. Hospital image,
            patient safety, personnel quality, and social responsibility were
            the significant predictors of patient satisfaction.
            <br />
            Personnel quality was the most important predictor. The implication
            is that to keep patients satisfied and willing to return for
            subsequent treatments, the hospitals should invest more on training
            their personnel.
            <br />
          </Text>
        </OurStoryContent>
      </OurStoryContentParent>
      </SliderContentCon>
    </OurStoryCon>
    <div style={{ marginTop: "5rem" }}>
        <Footer />
      </div>
    </OurStoryParent>
  );
}
