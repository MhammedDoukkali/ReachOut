import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {

return (

    <Wrapper>
        <NavBar>
<div>ReachOut</div>
<div>Home</div>
<NavLink to="/wellness">Wellness ♥︎ </NavLink>
<NavLink to="/findcenters">Medical Centers</NavLink>
<div>Sign in</div>

        </NavBar>

    </Wrapper>

)


};

export default Header;

const Wrapper = styled.div`
 font-size: 1.3vw;
`;

const NavBar = styled.div`
padding: 3vw;
  width: 90%;
  margin: auto;
  height: 8vw;
  align-items: baseline;
  display: grid;
  grid-template-columns: 0.9fr 0.5fr 0.5fr 0.5fr 0.2fr;
  gap: 2vw;
  font-size: 1.4vw;
  max-width: var(--max-page-width);
  background-color: white;
  /* color: var(--primary-colour); */
  /* background-color: #063563; */

  

`



