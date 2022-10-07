import styled from "styled-components";

const Footer = () => {


    return (
<Wrapper>
        <BottomFooter>
    <p>ReachOut Copyright © 2022</p>
  </BottomFooter>
  </Wrapper>

    )


}; 

export default Footer; 

const Wrapper = styled.div`
max-width: var(--max-page-width);
`

const BottomFooter = styled.div`
background-color: #4b5cb7;
padding: 3vw;
height: 5vw;
font-size: 1.4vw;
font-weight: 200;
/* position:absolute;
left:0;
bottom:0;
right:0; */
color: #faf1db;
display: flex;
padding-top: 1vw;
justify-content: center;
`