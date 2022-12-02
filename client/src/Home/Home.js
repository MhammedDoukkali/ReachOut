
import LayoutWellness from "../layout/LayoutWellness"
import {useState, useEffect} from "react"
import parse from 'html-react-parser';
import styled from "styled-components";
import About from "./About";
import CircularProgress from "@mui/material/CircularProgress";
import useInterval from "../hook/useInterval";


const Home = () => {

    const [allQuotes, setAllQuotes]= useState(null)
    
useInterval(()=> {
    fetch("/api/zenquotes") // 1
    .then(res=> res.json())
    .then(data=> {
       data.data.map(quote => {
           return setAllQuotes(`${quote.h}`)
       })
       })
 .catch((err)=> {
       return err.error ? JSON.parse(err.error) : err;
 })
}, 10000)


// if the quotes coming from the backend not ready to render
if(allQuotes === null) {
    return (
        <CircularProgress style={{
            marginLeft: '40%'}} />
    )
}
 

    return (
        <>
        {/* <LayoutWellness/> */}
        {allQuotes &&
        <Content>
            {parse(allQuotes)} 
            <hr class="solid"/>
            <h2>What is ReachOut?</h2>
            <p>ReachOut is a platform that we hope can help bridge the gap between physical and mental health,
                 by raising awareness and promoting information, resources, and help to those in need.</p>
            </Content>
}
        {/* <About/> */}
        </>
    )
};

const Content = styled.div`
display: flex;
flex-direction: column;
font-size: x-large;
padding: 5px;
margin: 5em;
>blockquote {
    text-align:center;
    font-weight: 100;
}
>footer {
    text-align: center;
}

h2{
}

p{
    font-weight: 100;
    margin-top:30px;
    line-height: 1.6;
}

hr.solid {
 margin: 30px;
  border-top: 3px solid black;
}

`;

export default Home;