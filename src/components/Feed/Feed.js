import React from 'react'
import './feed.css'
import StoryReel from '../StoryReel/StoryReel'
import MessageBox from '../MessageBox/MessageBox'
const Feed = () => {
  return (
    <div className="feed" >
        <StoryReel />
        <MessageBox />
    </div>
  )
}

export default Feed