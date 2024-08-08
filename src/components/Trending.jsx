import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Trending(){

    const movies = useSelector(state=>state.movie);

    return(
        <Container>
            <h4>Trending</h4>
            <Content>
                {
                    movies.trending && movies.trending.map((trend, key)=>{
                        return(
                            <Wrap key={key}>
                            <Link to= {`/detail/${trend.id}`}>
                                <img src={trend.cardImg} alt={trend.title} />
                            </Link>
                            </Wrap>
        
                        )
                    })
                }
            </Content>
        </Container>
    )
}


const Container = styled.div`
margin-top: 40px;
`; 

const Content = styled.div`
display:flex;
align-items:center;
justify-content: space-evenly;
`;

const Wrap = styled.div`
  width:22%;
  height:23vh;
  border:3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  overflow:hidden;
  cursor:pointer;
  position:relative;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px , rgb(0 0 0 / 73%) 0px 16px 10px -10px ;

  img{
  width:100%;
  display:block;
  position:absolute;
  z-index:1;
  top:0;
  }
 
  &:hover{
  box-shadow: rgb( 0 0 0 / 80%) 0px 40px 58px -16px , rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  transform: scale(1.05);
  border-color: rgba( 249, 249, 249, 0.8);
  transition: transform 500ms ease 0s;
  }
`;   
