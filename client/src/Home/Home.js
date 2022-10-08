
import LayoutWellness from "../layout/LayoutWellness"
import {useState, useEffect} from "react"
import parse from 'html-react-parser';
import styled from "styled-components";
import About from "./About";


const Home = () => {

    const [allQuotes, setAllQuotes]= useState(null)
    const[randomData, setRandomData] = useState()
    
    // useffect for allquotes if quotes null 
    useEffect(()=> {

       fetch("/api/zenquotes") // 1
         .then(res=> res.json())
         .then(data=> {
             setAllQuotes(data.data[0].h)
            
         })
        
      .catch((err)=> {
            return err.error ? JSON.parse(err.error) : err;
      })
    
    
    
    }, []);



if(allQuotes === null) {

    return (
        <div>Loading...</div>
    )
}
 //254px top 

    return (
        <>
        <LayoutWellness/>
        {allQuotes &&
        <Content>
            {parse(allQuotes)} 
            <hr class="solid"/>
            <h2>What is ReachOut?</h2>
            <p>ReachOut is a platform that we hope can help bridge the gap between physical and mental health,
                 by raising awareness and promoting information, resources, and help to those in need.</p>
                 <p></p>
            </Content>
}
        <About/>
        </>
    )
};

const Content = styled.h1`
position : absolute;
top: 20%;
left:50%; 
font-size: x-large;
padding: 5px;
>blockquote {
    text-align:center;
    font-weight: 100;
}
>footer {
    text-align: center;
}

h2{
    margin-top: 70px; 
    
    
}

p{
    font-weight: 100;
    margin:20px;
    line-height: 1.6;
}

hr.solid {
 margin: 30px;
  border-top: 3px solid black;
}


`

export default Home;