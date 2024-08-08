import { styled} from "styled-components";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState} from "react";
import { FirebaseContext } from "../Context/Firebase";

export default function Detail(){

    const params = useParams();
    console.log(params);

    let [ detailData, setDetailData] = useState(""); 

    const firebaseC = useContext( FirebaseContext);
    useEffect(()=>{

        firebaseC.getMovieDetails( params.id).then(( movie)=>{setDetailData(movie.data())}).catch((err)=>console.log("error comes ",err));

    },[firebaseC]);
    

    return(
        <Container>
            <Background>
                <img src={`${detailData.backgroundImg}`} alt={ `${ detailData.title}`}/>
            </Background>
            <ImageTitle>
                <img src={`${detailData.titleImg}`} alt={`${ detailData.title}`} />
            </ImageTitle> 
            <ContentMeta>
                <Actions>
                    <Player>
                        <img src="/images/play-icon-black.png"/>
                        <span>PLAY</span>
                    </Player>
                    <Trailer>
                        <img src="/images/play-icon-white.png"/>
                        <span>TRAILER</span>
                    </Trailer>
                    <AddList onClick={ ()=>{ firebaseC.addToWatchList( params.id, detailData.backgroundImg, detailData.cardImg, detailData.description, detailData.subTitle, detailData.title, detailData.titleImg, detailData.type ); console.log("added to watchlist")}}>
                        <span/>
                        <span/>
                    </AddList> 
                    <GroupWatch>
                        <div>
                            <img src="/images/group-icon.png" />
                        </div>
                    </GroupWatch> 
                </Actions>
                <SubTitle>{ detailData.subTitle}</SubTitle>
                <Description>{ detailData.description}</Description>
            </ContentMeta>
        </Container>
    )
}

const Container = styled.div`
position:absolute;
top: 27vh;
left: 3vw;
z-index:2;
`;

const Background = styled.div`
position:fixed;
left:0;
top:0;
z-index:-1;
opacity:0.8;
 
  img{
    width:100%;
    height:100%;
}
`;

const ImageTitle = styled.div`
margin-top:10px;  
position:relative;
width: 30vw;
  img{
  width:100%;
  height:100%;  
  }
`;

const ContentMeta = styled.div`
  position:relative;
  margin-top: 15vh;
  display:flex;
  flex-direction: column;
  justify-content: start;
`;

const Actions = styled.div`
  display: flex;
  justify-content:start;
  align-items:center;
`;

const Player = styled.button`
  border:none;
  background-color:white;
  color: black;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor: pointer;
  padding:7px 20px;
  border-radius: 5px; 

  span{
  letter-spacing:1.8px; 
  font-weight:700;
  }

  img{
  width:32px;
  }
  
  &:hover{
  background-color: rgb(149,149,149);
  }

`;

const Trailer = styled.button`
  border:none;
  background-color: rgba(0,0,0,0.3);
  color: white;
  display:flex;
  justify-content:center;
  align-items:center;
  padding: 7px 20px;
  border-radius:5px;
  border: 1px solid white;
  margin-left: 20px;
  cursor: pointer;

  span{
    letter-spacing: 1.5px;
    font-weight: 200;
    font-size:14px;
  }
    img{
    width:30px;
    }

    &:hover{
    background-color:rgba(255,255,255, 0.3);
    }

`;

const AddList = styled.button`
  border:2px solid white;
  background-color:black;
  margin-left: 20px;
  border-radius:50%;
  height: 40px;
  width: 40px;
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;

  span{
    display: inline-block;

    &:nth-child(1){
    position:absolute;
    height:2px;
    width:20px;
    background-color:white;
    }

    &:nth-child(2){
    position:absolute;
    height:2px;
    width:20px;
    background-color:white;
    transform: rotate(90deg);
    }
  }
    &:hover{
    background-color:rgba(255,255,255, 0.3);
    }

`;

const GroupWatch = styled.button`
  border:2px solid white;
  color:black;
  border-radius:50%;
  width:40px;
  height:40px;
  background-color:black;
  margin-left:20px;
  display:flex;
  align-items:center;
  justify-content:center;

  &:hover{
  background-color:rgba(255,255,255, 0.2);
  }

`;

const SubTitle = styled.div`
  background-color: transparent;
  color:white;
  font-size:15px;
  letter-spacing: 2px;
  margin-top:25px;
  font-weight:300;

`;

const Description = styled.div`
  background-color: transparent;
  color:white;
  font-size:18px;
  letter-spacing: 1px;
  margin-top:25px;
  width:80%;
  font-weight:300
`;