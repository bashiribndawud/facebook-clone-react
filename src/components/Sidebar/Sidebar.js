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

const Sidebar = () => {
  return (
    <div>
      <SideBarRow
        title="Bashir Dawud"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH7sdXkpXEtgxsI7bVUyaGjLwrWu6-snS-22Mtl8qYcA&s"
      />
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