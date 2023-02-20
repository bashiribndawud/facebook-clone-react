import React from 'react'
import './Story.css'
import { Avatar } from '@material-ui/core'

const Story = ({title, profileSrc, bgImage}) => {
  return (
    <div
      className="Story"
      style={{
        backgroundColor: "#08AEEA",
        backgroundImage: "linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)",
      }}
    >
      <Avatar src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story