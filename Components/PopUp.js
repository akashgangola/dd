import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Link from "next/link";

const ModalHeading = styled.h1`
  font-size: 3.5rem;
  color: #2d3779;
  font-weight: 700;
`;
const ModalHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalText = styled.p`
  font-size: 1.4rem;
  color: #6d728e;
  text-align: center;
  margin-top: 1rem;
`;
const ModalButtons = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
margin-top: 2rem;
padding-bottom: 2rem;
`;
const ModalButton = styled.button`
  width: 17rem;
  height: 5rem;
  border-radius: 6rem;
  border: 1px solid #448dc9;
  background-color: transparent;
  font-size: 1.4rem;
  color: #448dc9;
`;

function PopUp(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        className="modal-footer border-0"
        closeButton
      ></Modal.Header>
      <Modal.Body>
        <ModalHead>
          <ModalHeading>Sign up Now</ModalHeading>
        </ModalHead>
        <ModalText>
          Build trust and authenticity by connecting with highly-relevant
          patient influencers. Within the healthcare industry, patient
          influencers have pre-established trust with their audiences.
        </ModalText>
        <ModalButtons>
          <Link href='/signupcompany'><ModalButton>i’m a company</ModalButton></Link>
          <Link href='/signupinfluencer'><ModalButton>i’m a influencer</ModalButton></Link>
        </ModalButtons>
      </Modal.Body>
    </Modal>
  );
}
export default PopUp;
