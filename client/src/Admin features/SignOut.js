
import styled from "styled-components"; 
import { AdminContext } from "../AdminContext";
import { Navigate,useNavigate } from "react-router-dom";
import { useContext } from "react";



const SignOut = () => {

    const {admin, setAdmin} = useContext(AdminContext);
    const navigate= useNavigate();

    const signout = () => {
        setAdmin(null);
        sessionStorage.removeItem("login");
        navigate("/");
      };

    return (
        <>
        {!admin && (
            <Navigate to="/signin" replace={true} />
          )}
          <Button onClick={() => signout() }>Sign out</Button>
          </>
    )
}; 

export default SignOut; 

const Button = styled.button`
position:absolute;
top:150px;
right:0;
display:inline-block;
padding:0.3em 1.2em;
margin:0 0.3em 0.3em 0;
border-radius:2em;
box-sizing: border-box;
text-decoration:none;
font-family:'Roboto',sans-serif;
font-weight:300;
color:#FFFFFF;
background-color:#4b5cb7;
text-align:center;
transition: all 0.2s;

&:hover{
background-color:#4095c6;
}
`