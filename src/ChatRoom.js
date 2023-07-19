import React, { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import Chats from "./Chats";

function ChatRoom() {
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || ""
  );
  const provider = new GoogleAuthProvider();

  const auth = getAuth();
  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUserName(user.displayName);
        localStorage.setItem("userName", user.displayName);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {!userName && (
        <button className="btn btn-outline-danger w-100" onClick={googleLogin}>
          Signin With Google
        </button>
      )}
      {userName && <Chats name={userName} setUser={setUserName} />}
    </div>
  );
}

export default ChatRoom;
