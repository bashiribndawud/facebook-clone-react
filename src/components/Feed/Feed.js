import React, { useEffect, useState, useReducer } from "react";
import "./feed.css";
import StoryReel from "../StoryReel/StoryReel";
import MessageBox from "../MessageBox/MessageBox";
import Post from "../Posts/Post";
import { useStateValue } from "../../context/userContext";
import db from "../../firebase";
import { collection, getDoc, getDocs, onSnapshot, doc } from "firebase/firestore";
const initialState = [];
function reducer(state, action) {
  switch (action.type) {
    case "ADD_POST":
      return [
        ...state,
        {
          id: action.id,
          // image: action.payload.image,
          message: action.payload.message,
          profilePic: action.payload.profilePic,
          username: action.payload.username,
          timestamps: action.payload.timestamps,
        },
      ];

    default:
      return state;
  }
}
const Feed = () => {
  const {
    state: { user },
  } = useStateValue();
  const [postState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // onSnapshort() when anything happen to db insert/delete/update/
     function getPosts() {
      const posts = onSnapshot(doc(db, "posts"), (doc) => {
        console.log("Current data: ", doc.data());
        dispatch({ type: "ADD_POST", id: doc.id, payload: doc.data() });
      })
    }

    getPosts();
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <MessageBox />

      {postState.length === 0 ? (
        <>
          
        </>
      ) : (
        postState.map((post) => (
          <Post
            key={post.id}
            message={post.message}
            profilePic={post.profilePic}
            image={post.image}
            username={post.username}
            timestamp={post.timestamps}
          />
        ))
      )}
    </div>
  );
};

export default Feed;
