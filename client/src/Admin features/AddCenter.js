import styled from "styled-components";
import { useState, useContext } from "react";
import { AdminContext } from "../AdminContext";
import { Navigate } from "react-router-dom";
import SignOut from "./SignOut";
// import AllCenters from "./Admin features/AllCenters";

const AddCenter = () => {
  // used for condition if admin connected or not
  const { admin, setAdmin } = useContext(AdminContext);

  const [error, setError] = useState(false);
  //state for the form
  const [state, setState] = useState({
    name: "",
    institution: "",
    logo: "",
    lattitude: "",
    longitude: "",
    phoneNumber: "",
    webSite: "",
  });

  // state to handle the treatments checkbox
  const [treatments, setTreatments] = useState([]);
  //used to map over the array for the checkbox
  const checkListTreatment = ["urgent", "non-urgent"];

  // handle every value in the form
  const handleChange = (ev, key) => {
    setState({ ...state, [key]: ev.target.value });
  };
  // handle the checkbox for the treatment type
  const handleTreatment = (ev, key) => {
    if (ev.target.checked) {
      setTreatments([...treatments, key]);
    } else {
      setTreatments(treatments.filter((treatment) => treatment !== key));
    }
  };

  // function to handle submit and send data to DB with form
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(state)
    fetch("/api/add-center", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      //sending the body to the backend
      body: JSON.stringify({ ...state, treatments }),
    })
      .then((res) => res.json())
      .then((data) => {
          console.log(data)
      })
      .catch((err) => setError(err));
  };
  // console.log(state)
  return (
    <>
      <SignOut />
      {!admin && <Navigate to="/signin" replace={true} />}
      <Title>Form to add a center</Title>

      <Wrapper>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Name :</label>
          <input
            onChange={(e) => handleChange(e, "name")}
            value={state.name}
            className="name"
            type="text"
            required={true}
          />

          <label>Treatment types:</label>
          <div>
            {checkListTreatment.map((element) => (
              <div>
                <input
                  type="checkbox"
                  key={element}
                  onChange={(ev) => handleTreatment(ev, element)}
                  value={element}
                  checked={treatments.includes(element)}
                  className="treatmentTypes"
                />
                {element}
              </div>
            ))}
          </div>

          <label>Institution:</label>
          <input
            onChange={(e) => handleChange(e, "institution")}
            value={state.institution}
            className="institution"
            type="text"
            required={true}
          />

          <label>Logo:</label>
          <input
            onChange={(e) => handleChange(e, "logo")}
            value={state.logo}
            className="logo"
            type="text"
            required={true}
          />

          <label>GeoLocation</label>
          <label>Lattitude :</label>
          <input
            onChange={(e) => handleChange(e, "lattitude")}
            value={state.lattitude}
            className="lattitude"
            type="text"
            required={true}
          />
          <label>Longitude :</label>
          <input
            onChange={(e) => handleChange(e, "longitude")}
            value={state.longitude}
            className="longitude"
            type="text"
            required={true}
          />

          <label>Phone number : </label>
          <input
            onChange={(e) => handleChange(e, "phoneNumber")}
            value={state.phoneNumber}
            className="phoneNumber"
            type="text"
            required={true}
          />

          <label>Web site : </label>
          <input
            onChange={(e) => handleChange(e, "webSite")}
            value={state.webSite}
            className="webSite"
            type="text"
            required={true}
          />
          <button type="submit">Submit</button>
        </form>
      </Wrapper>
      {/* <AllCenters/> */}
    </>
  );
};

export default AddCenter;

const Wrapper = styled.div`
  margin: 30px;
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
    border-radius:2em;
    padding:0.7em 2.5em;

  }
  button {
    padding:0.7em 2.5em;
margin:0 0.3em 0.3em 0;
border-radius:2em;
box-sizing: border-box;
text-decoration:none;
font-family:var(--primary-family);
font-weight:200;
color:#FFFFFF;
background-color:#4b5cb7;
text-align:center;
transition: all 0.2s;


&:hover{
background-color:#4095c6;
}
}
`;

const Title = styled.h1`
  margin: 30px;
  font-size: x-large;
  text-align: center;
`;
