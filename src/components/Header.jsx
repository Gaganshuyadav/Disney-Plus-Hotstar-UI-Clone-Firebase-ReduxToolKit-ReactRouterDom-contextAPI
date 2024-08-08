import { styled} from "styled-components";
import DisHosLogo from "/images/logo.svg";
import { useEffect, useContext } from "react";
import { FirebaseContext} from "../Context/Firebase.jsx";
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";
 

export default function Header(){

    let firebaseC = useContext( FirebaseContext);

    const handleLoginWithGoogle = () => {
        firebaseC.signinWithGoogle().then((val)=>{console.log("signin with google in header ", val)});
    }

    const userDetail = useSelector(state => state.user);
    console.log("userDetail ",userDetail);


    return(
        <Nav>
            <Logo>
                <img src={DisHosLogo} />
            </Logo>
             <NavMenu>
                <a href="/home">
                    <img src="/images/home-icon.svg" alt="Home" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" alt="SEARCH"/>
                    <span>SEARCH</span>
                </a>
                <Link to={`/watchlist/${userDetail.userID}`}>
                    <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                    <span>WATCHLIST</span>
                </Link>
                {/* <a>
                    <img src="/images/original-icon.svg" alt="ORIGINALS"/>
                    <span>ORIGINALS</span>
                </a> */}
                <a href="/movies">
                    <img src="/images/movie-icon.svg" alt="MOVIES"/>
                    <span>MOVIES</span>
                </a>
                <Link to="/series">
                    <img src="/images/series-icon.svg" alt="SERIES"/>
                    <span>SERIES</span>
                </Link>
            </NavMenu>
            {
            firebaseC.isLoggedIn 
            ?
            <SignOut>
                <UserImg src={userDetail.photo} />
                <DropDown>
                    <span onClick={ ()=>{ firebaseC.signout()}}>Sign out</span>
                </DropDown>
            </SignOut>
            :
            <Login onClick={ handleLoginWithGoogle}>
                LOGIN
            </Login>
            }
        </Nav>
    )
}

const Nav = styled.div`
z-index:3;
position: fixed;
width:100%;
height: 13%;
background-color:#040714;
display:flex;
justify-content: space-between;
align-items:center;
top:0;
left:0;
`;

const Logo = styled.a`
width:86px;
min-height: 70px;
margin:0px 0px 0px 40px;

img{
width:100%;
display:block
}
`;

const NavMenu = styled.div`
  display:flex;
  flex-wrap: nowarp;
  heigth:100%;
  justify-content: flex-start;
  margin-right:300px;

  a {
  display:flex;
  align-items:center;
  padding: 22px 12px; 

  img{
  width:20px;
  }

  span{
  letter-spacing: 2px;
  color:white;
  position:relative;
  }
  
  }
   
  @media (max-width: 768px){
    // display: none;
  }
`;

const Login = styled.a`
    color:white;
    border: 1px solid white;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 1px;
    border-radius: 5px;
    padding: 8px 16px;
    margin-right:30px;
    transition: all 0.2s ease-in-out 0s;

    &:hover{
    background-color: white;
    color:black;
    font-weight: 600;
    }
`; 

const DropDown = styled.a`
    position: absolute;
    top: -75px;
    right:-34px;
    border-radius:5px;
    background-color: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 7px 12px;
    letter-spacing: 1px;
    opacity:0;

    &:hover{
    transition: background-color 0.1s ease 0s;
    background-color: rgb(13,13,13);
    }
`;

const SignOut = styled.a`
    
    margin-right: 30px; 

    &:hover{
    ${DropDown}{
    opacity:1;
    transition: opacity 1s ease-in-out 1s;
    top: 67px;
    right:34px;
    }

`;

const UserImg = styled.img`
    border-radius: 50%;
    height: 60px;
    width: 60px;
    cursor: pointer;
`;


