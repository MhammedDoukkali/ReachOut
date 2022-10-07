import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "./AdminContext";


const Signin = () => {
    const {admin, setAdmin} = useContext(AdminContext)
    
    const [error, setError] = useState(false);
    const[myId, setMyId] = useState()
    const[state, setState] = useState({
        username:"",
       passWord:""
    
    }); 
    

// create admin context 
// set id if log in and clear if log off 

    const navigate = useNavigate();

    const handleChange = (ev, key) => {
       
        setState({...state, [key] : ev.target.value});

    }

    const handleSubmit = (ev) => {
        ev.preventDefault();

        fetch("api/admin-login", {
            method: "POST",
            headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({...state}),
    })
      .then((res) => res.json()
      )

      .then((data) => {
        if(data.status === 200) {
            // store the id 
            
            setAdmin(data.id)
            navigate("/admin") 
       }else{
           setError(true)
       }
         
      })
      .catch((err) => setError(err));
};

if(error) {
    return <div>Error!</div>
}

console.log(admin)

    
    return (
        <Wrapper>
        <form onSubmit={(ev)=> handleSubmit(ev)}>
             <label>UserName:</label>
        <input
          type="text"
          required={true}
          value={state.username}
          onChange={(ev)=> handleChange(ev, "username")}
    
        />

        <label>password:</label>
        <input
          type="password"
          required={true}
          value={state.passWord}
          onChange={(ev)=> handleChange(ev, "passWord")}
        />
        <button type="submit">Log In</button>
        </form>
        </Wrapper>
    )
};


export default Signin; 

const Wrapper = styled.div`
margin:50px; 
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
}

`