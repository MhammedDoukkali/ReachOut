import styled from "styled-components"; 
import { useState } from "react";

const AddCenter = () => {

    const [error, setError] = useState(false);
   
    const[state, setState] = useState({
        name:"",
        institution:"",
        logo:"",
        lattitude:"",
        longitude:"",
        phoneNumber:"",
        webSite:"",
    
    }); 
    const[treatments, setTreatments] = useState([]); 

    // const checkListTreatment=['family medecine', 'Pediatrics',"women's health", "men's health", "mental health", "others"];
    const checkListTreatment=["urgent", "non-urgent"];

const handleChange = (ev, key) => {
    setState({...state, [key] : ev.target.value});
    
}

const handleTreatment = (ev, key) => {
    console.log(ev.target.checked)
    console.log(key)
    if(ev.target.checked) {
        setTreatments([...treatments, key])
    }else{
        setTreatments(treatments.filter((treatment) => treatment !== key ))
    }
    // setTreatment({checkListTreatment,[key] : ev.target.value});

}




const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(state)
    fetch("/api/add-center", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({...state,treatments}),
    })
      .then((res) => res.json())
      .then((data) => {
                console.log(data)
      })
      .catch((err) => setError(err));
};
// console.log(state) 
    return (
    <Wrapper>
        <form onSubmit={(e)=> handleSubmit(e)}>
            <label>name :</label>
            <input
             onChange={(e)=> handleChange(e, 'name')}
             value={state.name}
             className="name"
             type="text"
             required={true}
            />

            <label>Treatment types:</label>
            <div>
                {checkListTreatment.map(element=>
                <div> 
                    <input 
                        type="checkbox" 
                        key={element}
                        onChange={(ev)=> handleTreatment(ev, element)}
                        value={element}
                        checked={treatments.includes(element)}
                        className="treatmentTypes"
                        
                    
                    /> 
                                {element}
                </div>)} 
         
            </div>

            <label>institution:</label>
            <input
             onChange={(e)=> handleChange(e, 'institution')}
             value={state.institution}
             className="institution"
             type="text"
             required={true}
            />

            <label>logo:</label>
            <input
             onChange={(e)=> handleChange(e, 'logo')}
             value={state.logo}
             className="logo"
             type="text"
             required={true}
            />

            <label>geoLocation</label>
            <label>lattitude :</label>
            <input
             onChange={(e)=> handleChange(e, 'lattitude')}
             value={state.lattitude}
             className="lattitude"
             type="text"
            //  required={true}
            />
            <label>longitude :</label>
            <input
             onChange={(e)=> handleChange(e, 'longitude')}
             value={state.longitude}
             className="longitude"
             type="text"
            //  required={true}
            />


            <label>Phone number : </label>
            <input
             onChange={(e)=> handleChange(e, 'phoneNumber')}
             value={state.phoneNumber}
             className="phoneNumber"
             type="text"
             required={true}
            />

            <label>Web site : </label>
            <input
             onChange={(e)=> handleChange(e, 'webSite')}
             value={state.webSite}
             className="webSite"
             type="text"
             required={true}
            />
        <button type="submit">Submit</button>
        </form>
    </Wrapper>    
    )
}; 

export default AddCenter; 


const Wrapper = styled.div`
margin:10px; 
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


