import styled from "styled-components";

const MyCenter = ({myCenter}) => {

    // console.log(myCenter);

    
// .catch((err) => setError(err));


    

    return (
        <>
        <Wrapper>{myCenter.name}</Wrapper>
      
        </>
    )
};

export default MyCenter; 


const Wrapper = styled.div `
margin: 20px;

`