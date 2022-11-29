import Articles from "./Articles"
import { NavLink,useNavigate } from "react-router-dom"
import LayoutWellness from "./layout/LayoutWellness"
import styled from "styled-components"


const Resources = ({resources}) => {

    // console.log(resources.Sections)
    const navigate = useNavigate();
// const articles = resources.Sections

    return (
        <>
        
        {resources &&
        <div>
            <Button onClick={(ev)=> {
               
                navigate(`/articles/${resources.Id}`)
            }} >
                
        <div>
        <Image src={resources.ImageUrl}/>
        <Subject>{resources.Title}</Subject>
        <Read>Read More</Read>
        </div>
        
        </Button>
        <>
         
        
        </>
        </div>
    }
        </>
    )
}

export default Resources;

const Image = styled.img`
/* height:30vh; */
margin:20px;
width: 40vh;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 5px 25px 45px 65px;
`

const Button = styled.button`
background-color: white;
border: none;
`
const Subject = styled.h1`
font-size: 150%;
font-weight: 500;
margin:5px;

`

const Read =styled.h3`
color : #4b5cb7; 
text-align: start;
margin:5px; 
padding: 10px;
font-size: large;
text-decoration: underline;
`