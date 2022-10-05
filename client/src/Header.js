import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {

return (

    <Wrapper>
        <NavBar>
<NavigLink to="/" className='name'>ReachOut</NavigLink>
<NavigLink to="/">Home</NavigLink>
<NavigLink to="/wellness">Wellness ♥︎ </NavigLink>
<NavigLink to="/findcenters">Medical Centers</NavigLink>
<NavigLink to="/signin">Sign in</NavigLink>

        </NavBar>

    </Wrapper>

)


};

export default Header;

const Wrapper = styled.div`
 font-size: 1.3vw;
 background-color: #4b5cb7;
`;

const NavigLink = styled(NavLink)`
text-decoration: none;
color: #faf1db;
font-size: medium;
font-weight: 300;



&.active {
    color: var(--primary-colour);
  }

`

const NavBar = styled.div`
background-color: #4b5cb7;
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

  .name{
  font-size: x-large;
 
}
  /* color: var(--primary-colour); */
  /* background-color: #063563; */

  

`



