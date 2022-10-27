import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import OurStoryImg from "../public/sliderImg.png";
import NextArrow from "../public/next.png";
import PrevioueArrow from "../public/previous.png";
import styled from "styled-components";
import { useRef } from "react";

const SliderCon = styled.div`
  width: 100%;
  position:relative;
`;
const SliderParent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70rem;
`;
// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div style={{marginRight: '5rem'}}>
//     <div
//       className={className}
//       onClick={onClick}
//     >
//       <div style={{width: '5rem', height: '5rem'}}>
//       <Image src={NextArrow} object='contain' />
//       </div>
//     </div>
//     </div>
//   );
// }
// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }

export default function SliderComp() {
  const sliderRef = useRef();
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
  };

  // const SliderItem = ({ image }) => {
  //   return (
  //     <div style={{ display: "flex", alignItems: "center" }} >
  //       <div className="prevArrowCon">
  //       <button className="prevArrow" onClick={() => sliderRef?.current?.slickPrev()} />
  //       </div>
  //       <Image src={image} object="contain" />
  //       <div  className="nextArrowCon">
  //       <button className="nextArrow" onClick={() => sliderRef?.current?.slickNext()} />
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <SliderParent>
      <SliderCon>
        <div className="corousel-parent">
          <Slider ref={sliderRef} {...settings}>
            <Image src={OurStoryImg} />
            <Image src={OurStoryImg} />
            <Image src={OurStoryImg} />
            <Image src={OurStoryImg} />
            <Image src={OurStoryImg} />
            <Image src={OurStoryImg} />
            <Image src={OurStoryImg} />
            <Image src={OurStoryImg} />
          </Slider>
          <div className="slider-arrows-con">
          <div className="slider-arrows">
            <button
              className="prevArrow"
              onClick={() => sliderRef?.current?.slickPrev()}
            />
            <button
              className="nextArrow"
              onClick={() => sliderRef?.current?.slickNext()}
            />
          </div>
          </div>
        </div>
      </SliderCon>
    </SliderParent>
  );
}
