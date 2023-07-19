import React, { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import Chats from "./Chats";

function ChatRoom() {
  const [userName, setUserName] = useState("");
  const provider = new GoogleAuthProvider();

  const auth = getAuth();
  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUserName(user.displayName);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {!userName && <button className="btn btn-outline-danger w-100" onClick={googleLogin}>Signin With Google</button>}
      {userName && <Chats name={userName} />}
    </div>
  );
}

export default ChatRoom;
