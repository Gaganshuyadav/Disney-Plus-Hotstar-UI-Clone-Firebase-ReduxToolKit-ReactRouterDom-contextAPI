import styled from "styled-components";

export default function Viewers(){

    return(
        <Container>
            <Wrap> 
                <img src="/images/viewers-disney.png" />
                 <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                    <source src="/videos/1564674844-disney.mp4" type="video/mp4" /> 
                </video>  
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" />
                <video autoPlay={true} loop={true} playsInline={true} muted={true}> 
                    <source src="/videos/1564676714-pixar.mp4" type="video/mp4"/> 
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" />
                <video autoPlay={true} loop={true} playsInline={true} muted={true}> 
                    <source src="/videos/1564676115-marvel.mp4" type="video/mp4"/> 
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" />
                <video autoPlay={true} loop={true} playsInline={true} muted={true}> 
                    <source src="/videos/1608229455-star-wars.mp4" type="video/mp4"/> 
                </video>
            </Wrap>
            <Wrap>  
                <img src="/images/viewers-national.png" />
                <video autoPlay={true} loop={true} playsInline={true} muted={true}> 
                    <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4"/> 
                </video>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
margin-top: 45px;
height: 25vh;
display:flex;
align-items:center;
justify-content: space-evenly;
wrap: no-wrap;
// border:2px solid red;
`; 

const Wrap = styled.div`
  width:18%;
  height:18vh;
  border:3px solid rgba(249, 249, 249, 0.1);
  display:flex;
  overflow:hidden;
  justify-content:center;
  align-items:center;
  position:relative;
  z-index:3;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px , rgb(0 0 0 / 73%) 0px 16px 10px -10px ;

  img{
  width:100%;
  position:absolute;
  z-index:2;
  }

  video{
  width:105%;
  border-radius:10px;
  position:absolute;
  z-index:1;
  opacity:0;
  }
  
  
  &:hover{
    
    box-shadow: rbg(0 0 0/ 80%) 0px 40px 58px -16px, rgb(0 0 0 /72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border: rgba(249, 249, 249, 0.8); 
   video{
      opacity:1;
   }
  }
`;   