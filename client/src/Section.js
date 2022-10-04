import parse from "html-react-parser"
import styled from "styled-components"


const Section = ({title}) => {

console.log(title)


    return (
        <>
        <h1>{title.Title}</h1>
        <Content>
        {parse(title.Content)}
        </Content>
        <div></div>
        </>
    )
}

export default Section; 

const Content = styled.div`

>p{
    color:red; 
}

`