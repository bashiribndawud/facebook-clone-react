import React from 'react'
import SideBarRow from '../SidebarRow/SideBarRow'
import { Avatar } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import './sidebar.css'
import { useStateValue } from "../../context/userContext";
const Sidebar = () => {
   const {
     state: { user },
   } = useStateValue();
  return (
    <div className="sidebar">
      <SideBarRow title={user.displayName} src={user.photoURL} />
      <SideBarRow title="Friends" Icon={LocalHospitalIcon} />
      <SideBarRow title="Covid Info Center" Icon={EmojiFlagsIcon} />
      <SideBarRow title="Friends" Icon={PeopleIcon} />
      <SideBarRow title="Messenger" Icon={ChatIcon} />
      <SideBarRow title="Market Place" Icon={StorefrontIcon} />
      <SideBarRow title="Friends" Icon={ChatIcon} />
      <SideBarRow title="Videos" Icon={VideoLibraryIcon} />
      <SideBarRow title="Friends" Icon={ExpandMoreIcon} />
    </div>
  );
}

export default Sidebar