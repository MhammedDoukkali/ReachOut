import styled from "styled-components";
import healthImg from "../image/hand-untangling-tangle.webp"

const LayoutWellness = () => {


    return (
        <Wrapper>
<BackImg src={healthImg}/>        
</Wrapper>
    )
};

 export default LayoutWellness;

 const Wrapper = styled.div`
display: flex;
justify-content: center;
align-content: center;
 `;

 const BackImg = styled.img`
  height: 70%;
  width:70%;
  transition: width 2s, height 4s;

  :hover {
  width: 100%;
  height: 100%;
}

 `;