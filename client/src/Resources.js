import Articles from "./Articles"
import { NavLink,useNavigate } from "react-router-dom"
import LayoutWellness from "./LayoutWellness"
import styled from "styled-components"


const Resources = ({resources}) => {

    // console.log(resources.Sections)
    const navigate = useNavigate();
// const articles = resources.Sections
console.log(resources)
    return (
        <>
        
        {resources &&
        <div>
            <button onClick={(ev)=> {
               
                navigate(`/articles/${resources.Id}`)
            }} >
                
        <div>
        <img src={resources.ImageUrl}/>
        <h1>{resources.Title}</h1>
        </div>
        
        </button>
        <>
         {/* <Articles articles={articles}/> */}
        
        </>
        </div>
    }
        </>
    )
}

export default Resources;

