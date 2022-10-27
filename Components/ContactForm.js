import styled from "styled-components";
import Image from "next/image";
import MapImg from "../public/mapImg.png";
import Footer from "./Footer";

const ContactInner = styled.div`
 background:#fff;
`;
const ContactCon = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
`;
const ContactSec1 = styled.div`
  width: 70rem;
`;
const ContactSec2 = styled.div`
  width: calc(60rem + 90px);
  padding-left:90px;
`;
const ContactHead = styled.div``;
const Heading = styled.h1`
  font-size: 3.8rem;
  color: #2d3779;
  font-weight: 700;
`;
const SubHeading = styled.p`
  font-size: 1.6rem;
  color: #6d728e;
  font-weight: 400;
`;
const Form = styled.form``;
const FormInputs = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
`;
const Input = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
const Label = styled.label`
  font-size: 1.6rem;
  color: #2d3779;
  font-weight: 400;
`;
const Select = styled.select`
  width: 60rem;
  height: 5.5rem;
  background-color: transparent;
  border: 1px solid #e5e5e5;
  color: #6d728e;
  font-size: 1.6rem;
  outline: none;
  padding-left: 1rem;
  border-radius:4px;
  padding-right: 1rem;
  margin-top: 0.5rem;
`;
const Option = styled.option``;
const TextInput = styled.input`
  width: 29rem;
  height: 5.5rem;
  background-color: transparent;
  border: 1px solid #e5e5e5;
  color: #6d728e;
  font-size: 1.6rem;
  outline: none;
  padding-left: 1rem;
  margin-top: 0.5rem;
  border-radius:4px;
`;
const TextArea = styled.textarea`
  width: 60rem;
  height: 9.5rem;
  background-color: transparent;
  border: 1px solid #e5e5e5;
  color: #6d728e;
  font-size: 1.6rem;
  outline: none;
  margin-top: 0.5rem;
  padding-left: 1rem;
  padding-top: 1rem;
  resize: none;
`;
const Button = styled.button`
  width: 16rem;
  height: 5.5rem;
  border-radius: 6rem;
  border: none;
  cursor: pointer;
  background: #448dc9;
  box-shadow: 0px 6px 50px rgba(68, 141, 201, 0.24);
  font-size: 1.4rem;
  color: #ffffff;
  font-weight: 600;
`;
const ContactParent = styled.div``;

export default function ContactForm() {
  return (
    <ContactParent >
      <ContactInner>
        <ContactCon className="section-wrap container py-120">
          <ContactSec1 className="block-1">
            <Image src={MapImg} object="contain" />
          </ContactSec1>
          <ContactSec2 className="block-2 pl90">
            <ContactHead className="mb-3 pb-4">
              <Heading>Send us Your Message</Heading>
              <SubHeading>
                Proactively envisioned multimedia based expertise and cross-media
                growth strategies. Seamlessly visualize quality intellectual
                capital.
              </SubHeading>
            </ContactHead>
            <Form>
              <FormInputs className="contact-form">
                <Input className="full-width">
                  <Label>
                    I am <span style={{ color: "#448DC9" }}>*</span>
                  </Label>
                  <Select>
                    <Option>Company</Option>
                    <Option>Indivisual</Option>
                    <Option>Agency</Option>
                  </Select>
                </Input>
                <Input className="half-col">
                  <Label>
                    First Name <span style={{ color: "#448DC9" }}>*</span>
                  </Label>
                  <TextInput type="text" placeholder="Brandon" />
                </Input>
                <Input className="half-col">
                  <Label>
                    Last Name <span style={{ color: "#448DC9" }}>*</span>
                  </Label>
                  <TextInput type="text" placeholder="Perry" />
                </Input>
                <Input className="half-col">
                  <Label>
                    Email <span style={{ color: "#448DC9" }}>*</span>
                  </Label>
                  <TextInput type="email" placeholder="Email" />
                </Input>
                <Input className="half-col">
                  <Label>
                    Company <span style={{ color: "#448DC9" }}>*</span>
                  </Label>
                  <TextInput type="text" placeholder="Company" />
                </Input>
                <Input className="full-width">
                  <Label>
                    Comments <span style={{ color: "#448DC9" }}>*</span>
                  </Label>
                  <TextArea draggable="false" placeholder="Comments"></TextArea>
                </Input>
                <Button type="submit" className="mt-2">SEND MESSAGE</Button>
              </FormInputs>
            </Form>
          </ContactSec2>
        </ContactCon>
      </ContactInner>
      <div style={{ marginTop: "5rem" }}>
        <Footer />
      </div>
    </ContactParent>
  );
}
