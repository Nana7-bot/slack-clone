import React from "react";
import "./Header.css";
import { Avatar, Button } from "@mui/material";
import { AccessTimeRounded, HelpOutline, Search } from "@mui/icons-material";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebaseConfig";

function Header() {
  const [{ user }] = useStateValue();

  const logoutUser = () => {
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        {/* Avatar for logged in user */}
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />

        {/* Time icon */}
        <AccessTimeRounded />

        {/* Avatar for logged in user */}
      </div>

      <div className="header__search">
        {/* Search icon */}
        <Search />
        {/* input */}
        <input placeholder="Search Mighty Makers" />
      </div>

      <div className="header__right">
        {/* help icon */}
        <HelpOutline />
        <Button onClick={logoutUser}>Sign Out</Button>
      </div>
    </div>
  );
}

export default Header;
