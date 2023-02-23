import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useStateValue } from "../../context/userContext";
const Login = () => {
  const { dispatch } = useStateValue();
  function handleLogin(e) {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        dispatch({type: "SET_USER", user: result.user})
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }
  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png" />
      </div>
      <Button variant="contained" type="submit" onClick={handleLogin}>
        Sign In To Facebook
      </Button>
    </div>
  );
};

export default Login;
