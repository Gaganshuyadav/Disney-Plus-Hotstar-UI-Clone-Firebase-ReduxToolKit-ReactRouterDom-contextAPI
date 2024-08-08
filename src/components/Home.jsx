import { styled} from "styled-components";
import { FirebaseContext } from "../Context/Firebase";
import { useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom"; 
import homeBackground from "/images/home-background.png";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";

export default function Home(){

    const firebaseC = useContext( FirebaseContext);
    const navigate = useNavigate();

    if(!firebaseC.isLoggedIn){
        navigate("/");
    }

    useEffect(()=>{
      //get all movies from firestore
      firebaseC.getAllMovies();
    },[])

    return(
      <Container>
        <ImgSlider/>
        <Viewers/>
        <Recommends/>
        <NewDisney/>
        <Originals/>
        <Trending/>
      </Container>
    )
}

const Container = styled.div`
position: relative;
top:79px;
background-image: url("${homeBackground}");
`;