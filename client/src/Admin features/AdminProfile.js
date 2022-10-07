import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AllCenters from "./AllCenters";
import SignOut from "./SignOut";



const AdminProfile = () => {
    
    const navigate = useNavigate()

    return (
<>
<SignOut/>
<Wrapper>
<Title>Welcome</Title>

<AllCenters/>

<Button onClick={(ev)=> {
    navigate("/addcenter")
           }}>Add a center</Button>


</Wrapper>
</>

    )

}; 

export default AdminProfile; 

const Title = styled.h1`
font-size: xx-large;
margin: 30px; 

`
const Button = styled.button`
display:inline-block;
padding:0.5em 2.2em;
margin:0 0.3em 0.3em 0;
border-radius:2em;
box-sizing: border-box;
text-decoration:none;
font-family:var(--primary-family);
font-weight:300;
color:#FFFFFF;
background-color:#00ab00;
text-align:center;
transition: all 0.2s;

&:hover{
background-color:#4095c6;
}
`
const Wrapper = styled.div`

`