import React from 'react'
import './MessageBox.css'
import { Avatar } from '@material-ui/core'
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
const MessageBox = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            placeholder={`What's on your mind`}
            className="messageSender__input"
          />
          <input placeholder="Image URl (optional)" />

          <button onClick={handleSubmit} type="submit">
            hidden button
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon fontSize="large" style={{ color: "#F02849" }} />
          <h4>Live video</h4>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon fontSize="large" style={{ color: "#45BD62" }} />
          <h4>Photo/video</h4>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon fontSize="large" style={{ color: "#F7B928" }} />
          <h4>Feeling/activity</h4>
        </div>
      </div>
    </div>
  );
}

export default MessageBox