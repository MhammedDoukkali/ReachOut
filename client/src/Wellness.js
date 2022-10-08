import {useState, useEffect} from "react"
import LayoutWellness from "./layout/LayoutWellness";
import Resources from "./Resources";
import styled from "styled-components";


const Wellness = () => {

    const [data, setData]= useState(null)
    
    useEffect(()=> {

    
    const healthTopics = () => {
        // const request = require('request-promise');
      try {  
       fetch('https://health.gov/myhealthfinder/api/v3/topicsearch.json?topicId=552%2C30533%2C30539%2C30547%2C30560%2C30598%2C30610%2C30567%2C30559%2C537%2C531%2C534%2C537%2C541%2C551%2C30606%2C33304') // 1
         .then(res=> res.json())
         .then(data=> {
             console.log(data.Result)
             setData(data.Result.Resources)
         })
        
      }catch(err){
            return err.error ? JSON.parse(err.error) : err;
      }
    
      }
      healthTopics()
    }, [])
    
//  console.log(data)
   
return (
    <>
    
    

{data && 

    <Wrapper>{data.Resource.map((resources) => {
        return <Resources key ={resources} resources={resources}/>
    })}</Wrapper>

}
</>
    )


}; 

export default Wellness;

const Wrapper = styled.div `
/* display: grid;
  grid-template-columns: auto auto auto; */
display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
    


`