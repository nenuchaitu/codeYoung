import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  padding: 7px 18px 7px 18px;
  max-height: 10vh;
  background-image: linear-gradient(to right, #2980b9, #2c3e50);
  border-bottom: 2px solid #111;
  @media screen and (min-width: 576px) {
    max-height: 8vh;
    padding: 20px 50px 20px 50px;
  }
`;
export const MobileNavBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 576px) {
    display: none;
  }
`;
export const LargeNavBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 575px) {
    display: none;
  }
`;
export const NavLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  color: #000;
  text-decoration: none;
`;
export const NavLinkList = styled.ul`
  margin-left: 0px;
  padding-left: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25%;
  @media screen and (min-width: 576px) {
    width: 20%;
  }
  @media screen and (min-width: 960px) {
    width: 12%;
  }
`;
export const LinkListItem = styled.li`
  list-style-type: none;
`;
