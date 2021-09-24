import { useState } from "react";
import Cookies from "js-cookie";
import { GiPayMoney } from "react-icons/gi";
import { RiLoginBoxFill, RiLogoutBoxFill } from "react-icons/ri";

import {
  Navbar,
  MobileNavBar,
  LargeNavBar,
  NavLink,
  NavLinkList,
  LinkListItem,
} from "./StyledComponent";

const Header = () => {
  const getIsLoggedIn = () => {
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken === undefined) {
      return false;
    } else {
      return true;
    }
  };
  const [isLoggedIn, setIsLoggedIn] = useState(getIsLoggedIn());

  const removeAuthentication = () => {
    Cookies.remove("jwt_token");
    setIsLoggedIn(false);
  };

  return (
    <Navbar>
      <MobileNavBar>
        <NavLink href="/">
          <GiPayMoney size={35} />
        </NavLink>
        <NavLinkList>
          <LinkListItem>
            <NavLink href="/signup">Sign Up</NavLink>
          </LinkListItem>
          <LinkListItem>
            {isLoggedIn ? (
              <NavLink href="/login" onClick={removeAuthentication}>
                <RiLogoutBoxFill />
              </NavLink>
            ) : (
              <NavLink href="/login">
                <RiLoginBoxFill />
              </NavLink>
            )}
          </LinkListItem>
        </NavLinkList>
      </MobileNavBar>
      <LargeNavBar>
        <NavLink href="/">
          <GiPayMoney size={45} />
        </NavLink>
        <NavLinkList>
          <LinkListItem>
            <NavLink href="/signup">Sign Up</NavLink>
          </LinkListItem>
          {isLoggedIn ? (
            <NavLink href="/login" onClick={removeAuthentication}>
              Sign Out
            </NavLink>
          ) : (
            <LinkListItem>
              <NavLink href="/login">Sign In</NavLink>
            </LinkListItem>
          )}
        </NavLinkList>
      </LargeNavBar>
    </Navbar>
  );
};
export default Header;
