import { styled} from "styled-components";
import loginBackground from "/images/login-background.jpg";
import loginIcon1 from "/images/cta-logo-one.svg";
import loginIcon2 from "/images/cta-logo-two.png";
//--------------------
import { useContext } from "react";
import { FirebaseContext } from "../Context/Firebase";
import { useNavigate} from "react-router-dom";


export default function Login(){
    
    const firebaseC = useContext( FirebaseContext);
    const navigate = useNavigate();

    if( firebaseC.isLoggedIn){
        navigate("/home");
    }
    return(
        <Container>
            <Content>
                    <Icon1 src={ loginIcon1}/>
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for a additional fee with a Disney+ subscription. As of 28/07/24, the price 
                        of Disney+ and the Disney Bundle will increases by $1.
                    </Description>
                    <Icon2 src={ loginIcon2}/>
            </Content>
            <BgImage/>
        </Container>
    );
};

const Container = styled.div`
overflow: hidden;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;

const Content = styled.div`
height: 80vh;
width: 650px;
display:flex;
flex-direction: column;
margin-top:10px;
box-sizing:border-box;
justify-content: center;
align-items: center;
border-width:4px;
z-index:1;
`;

const BgImage = styled.div`
background-image: url(${loginBackground});
background:cover;
height:100vh;
width:100vw;
position:absolute;
top:0;
right:0;
z-index:-1px;
`;

const Icon1 = styled.img`
width: 600px;
min-height:1px;
position:relative;
z-index:1;
`;

const Icon2 = styled.img`
width: 600px;
position:relative;
z-index:1;
`;

const SignUp = styled.a`
background-color: #0063e5;
border-radius:5px;
width: 640px;
padding: 15px 0px;
font-size: 15px;
color:white; 
text-align:center;
font-weight: 700;
letter-spacing: 1.5px;

&:hover {
background-color: #0483ee;
}
`;

const Description = styled.p`
color: white;
text-align: center;
font-size: 11px;
font-weight: 400;
margin: 12px 0px 24px 0px;
letter-spacing: 1px;
`;


