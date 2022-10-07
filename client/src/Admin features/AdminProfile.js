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

<button onClick={(ev)=> {
    navigate("/addcenter")
           }}>Add a center</button>


</Wrapper>
</>

    )

}; 

export default AdminProfile; 

const Title = styled.h1`
font-size: xx-large;
margin: 30px; 

`

const Wrapper = styled.div`


`