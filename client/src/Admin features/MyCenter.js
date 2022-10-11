import styled from "styled-components";

//this component receive the prop from AllCenters to display
const MyCenter = ({ myCenter }) => {
  return (
    <>
      <Wrapper>{myCenter.name}</Wrapper>
    </>
  );
};

export default MyCenter;

const Wrapper = styled.div`
  margin: 20px;
  font-size: large;
`;
