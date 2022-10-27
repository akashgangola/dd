import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Hero3 from "../Components/Hero3";
import BG from "../public/bg6.png";
import BlogImg from "../public/blogImg.png";
import BlogCard from "../Components/BlogCard";
import Footer from "../Components/Footer";

const BlogCon = styled.div`
  background-color: white;
  padding-bottom: 5rem;
`;
const BlogHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const BlogHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3779;
`;
const BlogHeadSec2 = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
const BlogHeadButtonToggle = styled.div`
  width: 35rem;
  height: 5rem;
  border: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 0.25rem;
`;
const ToggleButton = styled.button`
  background-color: transparent;
  border-radius: 0.4rem;
  border: none;
  font-size: 1.4rem;
  font-weight: 400;
  padding: 1.1rem;
  cursor: pointer;
  color: #2d3779;
`;
const Select = styled.select`
  width: 16.5rem;
  height: 5rem;
  background-color: transparent;
  border: 1px solid #e5e5e5;
  color: #2d3779;
  font-size: 1.6rem;
  outline: none;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 0.5rem;
`;
const Option = styled.option``;
const BlogHeadCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;
const BlogCardCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const BlogCardParent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BlogParent = styled.div`
  background-color: #f7f7fa;
`;

export default function Blog() {
  const [isActive, setIsActive] = React.useState(false);
  const [isActive1, setIsActive1] = React.useState(false);
  const [isActive2, setIsActive2] = React.useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };
  const handleClick2 = () => {
    setIsActive1((current) => !current);
  };
  const handleClick3 = () => {
    setIsActive2((current) => !current);
  };
  return (
    <BlogParent>
      <BlogCon>
        <Header />
        <Hero3
          backGround={BG}
          heading="Latest Blog"
          text="Stay in-the-know on the latest healthcare marketing updates and insight through our regularly-updated blog posts."
          buttonText="get started"
        />
        <BlogHeadCon className="container">
          <BlogHead>
            <BlogHeading>Latest News</BlogHeading>
            <BlogHeadSec2>
              <BlogHeadButtonToggle>
                <ToggleButton
                  style={{
                    backgroundColor: isActive ? "#448DC9" : "",
                    color: isActive ? "white" : "",
                  }}
                  onClick={handleClick}
                >
                  All
                </ToggleButton>
                <ToggleButton
                  style={{
                    backgroundColor: isActive1 ? "#448DC9" : "",
                    color: isActive1 ? "white" : "",
                  }}
                  onClick={handleClick2}
                >
                  For Companies
                </ToggleButton>
                <ToggleButton
                  style={{
                    backgroundColor: isActive2 ? "#448DC9" : "",
                    color: isActive2 ? "white" : "",
                  }}
                  onClick={handleClick3}
                >
                  For Patients
                </ToggleButton>
              </BlogHeadButtonToggle>
              <Select>
                <Option>Sort By</Option>
                <Option>Sort By</Option>
                <Option>Sort By</Option>
              </Select>
            </BlogHeadSec2>
          </BlogHead>
        </BlogHeadCon>
        <BlogCardParent>
          <BlogCardCon className="container">
            <BlogCard
              img={BlogImg}
              date="JUN 16, 2022"
              heading="Globally harness multimedia based collaboration"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis gravida condimentum. tincidunt vitae lectus nec ullamcorper. "
            />
            <BlogCard
              img={BlogImg}
              date="JUN 16, 2022"
              heading="Globally harness multimedia based collaboration"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis gravida condimentum. tincidunt vitae lectus nec ullamcorper. "
            />
            <BlogCard
              img={BlogImg}
              date="JUN 16, 2022"
              heading="Globally harness multimedia based collaboration"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis gravida condimentum. tincidunt vitae lectus nec ullamcorper. "
            />
            <BlogCard
              img={BlogImg}
              date="JUN 16, 2022"
              heading="Globally harness multimedia based collaboration"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis gravida condimentum. tincidunt vitae lectus nec ullamcorper. "
            />
            <BlogCard
              img={BlogImg}
              date="JUN 16, 2022"
              heading="Globally harness multimedia based collaboration"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis gravida condimentum. tincidunt vitae lectus nec ullamcorper. "
            />
            <BlogCard
              img={BlogImg}
              date="JUN 16, 2022"
              heading="Globally harness multimedia based collaboration"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis gravida condimentum. tincidunt vitae lectus nec ullamcorper. "
            />
            <BlogCard
              img={BlogImg}
              date="JUN 16, 2022"
              heading="Globally harness multimedia based collaboration"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis gravida condimentum. tincidunt vitae lectus nec ullamcorper. "
            />
            <BlogCard
              img={BlogImg}
              date="JUN 16, 2022"
              heading="Globally harness multimedia based collaboration"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis gravida condimentum. tincidunt vitae lectus nec ullamcorper. "
            />
            <BlogCard
              img={BlogImg}
              date="JUN 16, 2022"
              heading="Globally harness multimedia based collaboration"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis gravida condimentum. tincidunt vitae lectus nec ullamcorper. "
            />
            <BlogCard
              img={BlogImg}
              date="JUN 16, 2022"
              heading="Globally harness multimedia based collaboration"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis gravida condimentum. tincidunt vitae lectus nec ullamcorper. "
            />
            <BlogCard
              img={BlogImg}
              date="JUN 16, 2022"
              heading="Globally harness multimedia based collaboration"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis gravida condimentum. tincidunt vitae lectus nec ullamcorper. "
            />
            <BlogCard
              img={BlogImg}
              date="JUN 16, 2022"
              heading="Globally harness multimedia based collaboration"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis gravida condimentum. tincidunt vitae lectus nec ullamcorper. "
            />
          </BlogCardCon>
        </BlogCardParent>
      </BlogCon>
      <div style={{ marginTop: "5rem" }}>
        <Footer />
      </div>
    </BlogParent>
  );
}
