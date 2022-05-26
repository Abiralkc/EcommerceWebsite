import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: transparent;
  margin-bottom: -80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: absolute;
  top: 0;
  z-index: 2;
  width: 100%;
  transition: background-color 0.3 ease-in;
`;
export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: start;
  overflow: hidden;
  height: 80px;
  ${Container}
`;
export const NavLogo = styled.nav`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  z-index: 50;
`;

export const MobileIcon = styled.div`
  display: none;
  z-index: 50;
  @media screen and (max-width: 960px) {
    display: block; // used for displaying  navbar items in block when the screen is resized
    position: absolute;
    top: 0;
    right: 100px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const NavMenu = styled.ul`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: left;
  list-style: none;
  text-align: center;
  width: 50%;
  margin-top: 30px;
  flex: 0.6;
  margin-left: 150px;
  opacity: 0.6;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    padding-top: 30%;
    top: 0;
    left: 0;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    transform: translateY(${({ show }) => (show ? "0" : "-10px")});
    transition: opacity 0.5s ease;
    /* background-color: #071c2f; */
    background-color: black;
    color: #fff;
  }
  /* > li:first-child {
		margin-left: auto;
	} */
`;
export const NavLinks = styled.span``;


export const NavItem = styled.li`
  height: 80px;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;