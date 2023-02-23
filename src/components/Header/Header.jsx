import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import SwitchVideoIcon from "@material-ui/icons/SwitchVideo";
import GroupIcon from "@material-ui/icons/Group";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import MenuIcon from "@material-ui/icons/Menu";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import Avatar from "@material-ui/core/Avatar";
import './Header.css';
import { useStateValue } from "../../context/userContext";
const Header = () => {
  const {state: {user}} = useStateValue();
  console.log(user)
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
          alt="Logo"
        />
        <div className="search">
          <SearchIcon fontSize="large" className="search-icon" />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__center">
        <div className="icon__option active">
          <IconButton>
            <HomeIcon />
          </IconButton>
        </div>
        <div className="icon__option">
          <IconButton>
            <SwitchVideoIcon />
          </IconButton>
        </div>
        <div className="icon__option">
          <IconButton>
            <GroupIcon />
          </IconButton>
        </div>
        <div className="icon__option">
          <IconButton>
            <VideogameAssetIcon />
          </IconButton>
        </div>
      </div>
      <div className="header__right">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <Avatar alt="Cindy Baker" src={user.photoURL} />
      </div>
    </div>
  );
};

export default Header;
