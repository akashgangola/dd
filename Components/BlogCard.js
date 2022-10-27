import styled from "styled-components";
import Image from "next/image";

const BlogCardCon = styled.div`
  width: 34rem;
  border: 1px solid #e5e5e5;
  margin-top: 2rem;
`;
const BlogImage = styled.div`
  width: 34rem;
`;
const BlogCardContent = styled.div`
  width: 93%;
`;
const Date = styled.p`
  font-size: 1.4rem;
  color: #448dc9;
  font-weight: 500;
  margin-top: 0.5rem;
`;
const Heading = styled.h1`
  font-size: 1.9rem;
  color: #2d3779;
  font-weight: 700;
`;
const Text = styled.p`
  font-size: 1.3rem;
  color: #6d728e;
  font-weight: 400;
`;
const BlogCardContentCon = styled.div`
  margin-left: 1.8rem;
`;

export default function BlogCard(props) {
  return (
    <BlogCardCon>
      <BlogImage>
        <Image src={props.img} object="contain" />
      </BlogImage>
      <BlogCardContentCon>
        <BlogCardContent>
          <Date>{props.date}</Date>
          <Heading>{props.heading}</Heading>
          <Text>{props.text}</Text>
        </BlogCardContent>
      </BlogCardContentCon>
    </BlogCardCon>
  );
}
