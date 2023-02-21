import React from 'react'
import './Story.css'
import { Avatar } from '@material-ui/core'






const Story = ({ title, profileSrc, bgColor, backgroundImage }) => {
  return (
    <div
      className="Story"
      style={{
        backgroundColor: `${bgColor}`,
        backgroundImage: `${backgroundImage}`,
      }}
    >
      <Avatar className="story__avatar" src={profileSrc} />
      <h4 className="title">{title}</h4>
    </div>
  );
};

export default Story