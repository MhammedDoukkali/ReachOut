import Section from "./Section"
import styled from "styled-components"
import LayoutSection from "./layout/LayoutSection"


const Article = ({section}) => {

    // console.log(section)


    return (
        <>
        <LayoutSection/>
        {section &&
        <Wrapper>{section.section.map((title) => {
            console.log(title)
            return <Section key={title} title={title}/>
        })}</Wrapper>
    }
    </>
    )
}

export default Article ; 

const Wrapper = styled.div `
/* display: grid;
  grid-template-columns: auto auto auto; */
  display:flex;
flex-direction: column;
align-content: center;
    /* minmax(1rem, 1fr)
    minmax(auto, 57ch)
    minmax(1.2rem, 2fr)
    minmax(1.2rem, 2fr); */
    

`