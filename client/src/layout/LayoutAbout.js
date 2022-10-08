import styled from "styled-components";
import healthyoga from "../image/practicing-yoga.jpeg"

const LayoutAbout = () => {


    return (
<BackImg src={healthyoga}/>        
    )
};
 export default LayoutAbout;


 const BackImg = styled.img`
 
  max-height: 68vh;
  display : block;
  float: right;
  margin:50px; 
  `
