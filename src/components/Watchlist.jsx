import styled from "styled-components";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../Context/Firebase";
import { useContext, useEffect, } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


export default function Watchlist(){

    const firebaseC = useContext(FirebaseContext);
    const params = useParams();
   
    

    useEffect(()=>{
        firebaseC.getWatchlist( params.userid).then((result)=>{console.log("...watchlist Loading ")}).catch((error)=>{console.log("error")});
    },[ firebaseC]);

    const watchlist = useSelector( state=>state.allWatchlistMoviesSeries.list);


    return(
        <Container>
            <h4>WatchList</h4>
            {
            watchlist
            ?
            <Content>
              
                {
                    watchlist && watchlist.map((movie,key)=>{
                        return(
                            <Wrap key={key}>
                            <Link to = {`/detail/${movie.origiID}`}>
                                <img src={ movie.cardImg} alt={ movie.title} />
                            </Link>
                        </Wrap>
                        )
                    })
                }
            </Content>
            :
            <Content>
                <h1>You are not added any watchlist yet!!</h1>
            </Content>
            }
        </Container>
    )
}


const Container = styled.div`
margin-top: 80px;
position:absolute;
width:100vw;
`; 

const Content = styled.div`
display:grid;
width:100vw;
grid-template-columns:auto auto auto;
grid-template-rows:auto auto ;
`;

const Wrap = styled.div`
  width:26vw;
  height:26vh;
  border:3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  overflow:hidden;
  margin-bottom:30px;
  margin-left:40px;
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
