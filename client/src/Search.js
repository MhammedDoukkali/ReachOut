import styled from "styled-components";
import { useState } from "react";


const Search = ({suggestions, handleSelect}) => {
    // console.log(suggestions);
const [value, setValue]=useState(""); 
let matchedSuggestion = suggestions.filter((suggestion) => {
    const numIsEnoughCharac=value.length >= 2;
    const includeValue= suggestion.Title
  .toLowerCase()
  .includes(value.toLowerCase());
  return numIsEnoughCharac && includeValue; 
})

    // console.log(suggestions);
console.log(value); 
    return (
        <Wrapper>
            <Input 
            type="text"
            value={value}
            onChange={(ev) => setValue(ev.target.value)}
            onKeyDown={(ev) => {
                if(ev.key === "Enter"){
                handleSelect(ev.target.value)}
            }
        }
                />
            <Ul>
                {
                matchedSuggestion.map((suggestion) => {
                    let matchIndex= suggestion.Title.toLowerCase().indexOf(value.toLowerCase()) + value.length;
                    console.log(value.length)
                    return (
                        <Li
                        key={suggestion.Title}
                        onClick={() => handleSelect(suggestion.Title)}
                        >
                            <span>
                            {suggestion.Title}
                            </span>
                        </Li>
                    );
                })
            }
            </Ul>
        </Wrapper>
    )
}; 

export default Search; 

const Wrapper=styled.div`
display: inline-block;
`;

const Input=styled.input`
height: 40px;
  width: 400px;
  font-size: large;
`;

const Li = styled.li`
background-color: lightcyan;

&:hover {
  background-color: lightblue;
}
`;
const Ul = styled.ul`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; ;
`;