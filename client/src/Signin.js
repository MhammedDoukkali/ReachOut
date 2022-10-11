import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "./AdminContext";

const Signin = () => {
  const { admin, setAdmin } = useContext(AdminContext);

  const [error, setError] = useState(false);
  const [state, setState] = useState({
    username: "",
    passWord: "",
  });


// navigate to the admin profile page
  const navigate = useNavigate();
// handle the state of the form to send to the backend 
  const handleChange = (ev, key) => {
    setState({ ...state, [key]: ev.target.value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    fetch("api/admin-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      //sending the state to the backend for 
      body: JSON.stringify({ ...state }),
    })
      .then((res) => res.json())

      .then((data) => {
        if (data.status === 200) {
          // store the id

          setAdmin(data.id);
          navigate("/admin");
        } else {
          setError(true);
        }
      })
      .catch((err) => setError(err));
  };

  if (error) {
    return <div>Error!</div>;
  }


  return (
    <Wrapper>
      <form onSubmit={(ev) => handleSubmit(ev)}>
        <label>Username:</label>
        <input
          type="text"
          required={true}
          value={state.username}
          onChange={(ev) => handleChange(ev, "username")}
        />

        <label>password:</label>
        <input
          type="password"
          required={true}
          value={state.passWord}
          onChange={(ev) => handleChange(ev, "passWord")}
        />
        <button type="submit">Log In</button>
      </form>
    </Wrapper>
  );
};

export default Signin;

const Wrapper = styled.div`
  margin: 50px;
  form {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  label {
    grid-column: 1 / 2;
  }

  input,
  button {
    grid-column: 2 / 3;
    border-radius: 2em;
    padding: 0.7em 2.5em;
  }
  button {
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
  }
`;
