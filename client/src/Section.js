import ReactHtmlParser from "html-react-parser"
import styled from "styled-components"

// mapping prop coming from the Article component to the display each article 
const Section = ({title}) => {

console.log(title)

//the function to parse the html coming from the API 
const transformAnchor = (html) => {

    return ReactHtmlParser(html, {
        transform(node) {
            if (node.type === 'tag' && node.name === 'a') {
                node.attribs.target = "_blank"
            }
        }
    });

}


    return (
        <Wrapper>
        <Titles>{title.Title}</Titles>
        <Content>
        {transformAnchor(title.Content)}

        </Content>
        </Wrapper>
    )
}

export default Section; 

const Wrapper = styled.div`
padding:15px; 
margin:20px;
background-color: #e8eafc;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 5px 25px 45px 50px;
`;

const Titles = styled.h1`
margin : 10px; 
`;

const Content = styled.div`

>p{
    line-height: 1.6; 
    text-align: justify;
}
>h4 {
    margin:5px;
}
>ul{
    list-style: disc inside;
}

>a{
text-decoration-line: none;
}
`;