import styled from "styled-components";
import Header from "../Components/Header";
import Hero3 from "../Components/Hero3";
import BG from "../public/bg5.png";
import ContactForm from "../Components/ContactForm";

const ContactCon = styled.div`
 background-color: #f7f7fa;
`;

export default function Contact() {
  return (
    <ContactCon>
      <Header />
      <Hero3
        backGround={BG}
        heading="Contact Us"
        text="We invite patients and company representatives alike to reach out for questions, information, and support."
        buttonText="get started"
      />
      <ContactForm />
    </ContactCon>
  );
}
