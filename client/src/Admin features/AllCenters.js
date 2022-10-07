import { useEffect, useState } from "react";
import styled from "styled-components";
import MyCenter from "./MyCenter";

const AllCenters = () => {

    const [centers, setCenters] = useState();
    const [error, setError] = useState(false);

useEffect(()=> {

fetch("/api/get-centers")
.then(res => res.json())
.then(data => {
    console.log(data)
    setCenters(data.myCenters)
})
.catch((err) => setError(err));

}, [])

const handleDelete = (_id) => {

    fetch(`/api/delete-center/${_id}`, {
        method: 'DELETE',
    })
.then(res => res.json())
.then(data => {
console.log(data)
setCenters(data.myCenters)
})
}

    return (
        <>
        <Title>Centers list : </Title>
        {centers &&
        <div>{centers.map((myCenter)=> {
            
            return (
            <>
            <MyCenter key={myCenter} myCenter ={myCenter}/>
            <button onClick={()=> handleDelete(myCenter.name)}>delete</button>
            </>
            )

        })}</div>
        }
        
        </>

    )
}; 

export default AllCenters; 

const Title = styled.h3`
margin: 20px; 

`