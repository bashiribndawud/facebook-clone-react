import React from 'react'
import './SideBarRow.css'
import { Avatar } from '@material-ui/core'
const SideBarRow = ({Icon, title, src}) => {
  return (
    <div className="sidebar__row">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SideBarRow