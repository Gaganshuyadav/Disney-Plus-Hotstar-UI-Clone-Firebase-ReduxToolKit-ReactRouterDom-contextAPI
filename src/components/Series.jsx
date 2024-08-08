import styled from "styled-components";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../Context/Firebase";
import { useContext, useEffect, } from "react";
import { useSelector } from "react-redux";

export default function Series(){

    const firebaseC = useContext(FirebaseContext);

    useEffect(()=>{
        firebaseC.getAllSeriesSearch( ).then((result)=>{console.log("...series Loading ")}).catch((error)=>{console.log("error")});
    },[]);

    const series = useSelector( state=>state.allWatchlistMoviesSeries.series);
    
    return(
        <Container>
            <h4>Series</h4>
            <Content>
              
                {
                    series && series.map((movie,key)=>{
                        return(
                            <Wrap key={key}>
                            <Link to = {`/detail/${movie.id}`}>
                                <img src={ movie.cardImg} alt={ movie.title} />
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
margin-top: 80px;
`; 

const Content = styled.div`
display:flex;
align-items:center;
flex-wrap:wrap;
`;

const Wrap = styled.div`
  width:22%;
  height:23vh;
  border:3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  margin-top:40px;
  margin-left:30px;
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
