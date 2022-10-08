import LayoutAbout from "../layout/LayoutAbout";
import styled from "styled-components";

const About = () => {


    return (
        <>
        <LayoutAbout/>
        <Wrapper>
        
        {/* <h2>Online services</h2>
        <hr class="solid"/>
        <p>ReachOut has a variety of online services to suit your needs, 
            whether you're looking for a specific service or just wanting to learn more about physical or mental health.</p> */}

        <h2>Physical health & Mental health</h2>
        {/* <hr class="solid"/> */}
        <p>ReachOut is an impartial resource that promotes both physical and mental health - we have articles and blogs on both topics, 
            as well as an extensive list of useful resources for each type of illness.</p>

            <h2>Health care facilities list</h2>
            {/* <hr class="solid"/> */}
            <p>For those who don't know where to start, ReachOut has a comprehensive list of health care facilities that you can search by location, 
                diagnosis type, insurance type etc. </p>
                
                </Wrapper>
        </>
    )
};

export default About; 

const Wrapper = styled.div`
position : absolute;
top: 80%;
left:2%; 
font-size: x-large;
padding: 10px;
margin:10px;


p{
    font-weight: 100;
    line-height: 1.6;
    margin:  auto;
  max-width: 700px;
 text-align: justify;
  padding: 20px;
    
}
h2{
    margin:20px;
}
/* hr.solid {
 margin: 10px;
  border-top: 3px solid black;
} */
`