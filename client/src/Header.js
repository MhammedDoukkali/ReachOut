import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";

const Header = () => {
  return (
    <Wrapper>
      <NavBar>
        <NavigLink to="/" className="name">
          ReachOut
        </NavigLink>
        <NavigLink to="/">
          Home <FaHome />{" "}
        </NavigLink>
        <NavigLink to="/wellness">Wellness ♥︎ </NavigLink>
        <NavigLink to="/findcenters">
          Medical Centers <FaHandHoldingMedical />
        </NavigLink>
      </NavBar>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  font-size: 1.3vw;
  background-color: #4b5cb7;
`;

const NavigLink = styled(NavLink)`
  text-decoration: none;
  color: #faf1db;
  font-size: 0.9em;
  font-weight: 500;
  transition: all 0.2s;
  margin: 0 0.3em 0.3em 0;
  &.active {
    color: var(--primary-colour);
  }

  &:hover {
    color: #4095c6;
  }
`;

const NavBar = styled.div`
  background-color: #4b5cb7;
  padding: 2vw;
  width: 90%;
  margin: auto;
  height: 5vw;
  align-items: baseline;
  display: grid;
  grid-template-columns: 0.9fr 0.5fr 0.5fr 0.3fr;
  gap: 2vw;
  font-size: 1em;
  font-weight: bolder;
 

  .name {
    font-size: 1.5em;
    font-weight: bolder;
  }
`;
