import styled from "styled-components";
import mentalImg from "../image/purification-mind.jpeg"


const LayoutSection = () => {

    return (
        <Mind src={mentalImg}/>
    )
}; 

export default LayoutSection; 

const Mind = styled.img`
max-height: 50vh;
margin:auto; 
display : block;

`
