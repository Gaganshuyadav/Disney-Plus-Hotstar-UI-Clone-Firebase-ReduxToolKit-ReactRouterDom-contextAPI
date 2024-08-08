import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImgSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay: true ,
        autoplaySpeed: 3000,
        arrows:true, 
    }

    return(
            <Carousel {...settings}>
               <Cover>
                  <Bound>
                     <img src="/images/slider-badag.jpg" />
                  </Bound>
               </Cover>
               <Cover>
                  <Bound>
                     <img src="/images/slider-badging.jpg" />
                  </Bound>
               </Cover>
               <Cover>
                  <Bound>
                     <img src="/images/slider-scale.jpg" />
                  </Bound>
               </Cover>
               <Cover>
                  <Bound>
                     <img src="/images\slider-scales.jpg" />
                  </Bound>
               </Cover>
            </Carousel>
    )
}

const Carousel = styled(Slider)`
    margin-top:20px;
    width:95%; 
    margin-left: 2.5%;

    & > button {
       height:100%;
       width:8%;
       opacity:0;
       z-index:4;

      &:hover{
      opacity: 1;
      transition: opacity 0.8s ease 0s;
      }

   }

   ul li button {
     
      &: before{
      font-size: 10px;
      color: rgb(150, 158, 171);
      }
   }

   li.slick-active button:before{
   color:white;
   }

   .slick-list{
   overflow: initial;
   }

`;

const Cover = styled.div`
  
`;

const Bound = styled.a`

  padding: 4px; 
  display:block;
  cursor:pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  img{
  width:100%;
  height:100%; 
  }

  &:hover{
  padding:0;
  border: 4px solid rgba(249, 249, 249, 0.8);
  transition-duration: 0.3s ;
  }
`;