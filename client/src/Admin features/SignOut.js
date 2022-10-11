import styled from "styled-components";
import { AdminContext } from "../AdminContext";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";

//function to sign out from admin profile 
const SignOut = () => {
  //id from the adminContext if have id ok if not kick them out 
  const { admin, setAdmin } = useContext(AdminContext);
  const navigate = useNavigate();
//remove the id from sessionStorage
  const signout = () => {
    setAdmin(null);
    sessionStorage.removeItem("login");
    navigate("/");
  };

  return (
    <>
      {!admin && <Navigate to="/signin" replace={true} />}
      <Button onClick={() => signout()}>Sign out</Button>
    </>
  );
};

export default SignOut;

const Button = styled.button`
  position: absolute;
  top: 150px;
  right: 0;
  display: inline-block;
  padding: 0.7em 2.5em;
  margin: 0 0.3em 0.3em 0;
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: var(--primary-family);
  font-weight: 200;
  color: #ffffff;
  background-color: #4b5cb7;
  text-align: center;
  transition: all 0.2s;

  &:hover {
    background-color: #4095c6;
  }
`;
