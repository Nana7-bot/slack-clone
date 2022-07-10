import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import db, { auth, provider } from "./firebaseConfig";
import { useStateValue } from "./StateProvider";
import { actionType } from "./reducer";

function Login() {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // console.log(" result in login.js");
        // console.log(result);
        dispatch({
          type: actionType.SET_USER,
          user: result.user,
        });

        db.collection('users').doc()
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/10/Slack-Logo.png"
          alt="slack-logo"
        />
        <h1>Sign in to Might Makers HQ</h1>
        <p>mightymakers.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
