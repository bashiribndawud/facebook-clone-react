import React, { useState } from "react";
import "./MessageBox.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "../../context/userContext";
import { doc, setDoc, serverTimestamp  } from "firebase/firestore"; 
import db from "../../firebase"
const MessageBox = () => {
  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const {
    state: { user },
  } = useStateValue();
  const handleSubmit =  (e) => {
    e.preventDefault();
    try {
      setDoc(doc(db, "posts", 'PO'), {
        mesage: input,
        timestamp: serverTimestamp(),
        profilePic: user.photoURL,
        username: user.displayName,
        image: imgUrl,
      });
    } catch (error) {
      console.log(error.message)
    }

    setInput("")
    setImgUrl("")
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`What's on your mind ${user.displayName}`}
            className="messageSender__input"
          />
          <input
            placeholder="Image URl (optional)"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />

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
};

export default MessageBox;
