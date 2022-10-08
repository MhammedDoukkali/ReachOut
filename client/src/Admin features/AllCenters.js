import { useEffect, useState } from "react";
import styled from "styled-components";
import MyCenter from "./MyCenter";
import {MdDeleteForever} from "react-icons/md"

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
        <Wrapper>
        {centers &&
        <div>{centers.map((myCenter)=> {
            
            return (
            <Content>
            <MyCenter key={myCenter} myCenter ={myCenter}/>
            <Button><MdDeleteForever  size={'2em'} onClick={()=> handleDelete(myCenter.name)}/></Button>
            </Content>
            )

        })}</div>
    }
    </Wrapper>
        
        </>

    )
}; 

export default AllCenters; 

const Content = styled.div`

display:flex;
flex-direction: row;
`
const Wrapper = styled.div`
/* display:flex;
justify-content: flex-start;
flex-direction: column; */
/* position: relative; */

`;

const Title = styled.h3`
margin: 20px; 

`;

const Button = styled.button`
/* display:inline-block;
padding:0.5em 2.2em;
margin:0 0.3em 0.3em 0;
border-radius:2em;
box-sizing: border-box;
text-decoration:none;
font-family:var(--primary-family);
font-weight:300;
color:#FFFFFF;
background-color:#fb4358;
text-align:center;
transition: all 0.2s;

&:hover{
background-color:#4095c6;
} */

background-color: white;
border: none;
color:#fb4358; 

`;