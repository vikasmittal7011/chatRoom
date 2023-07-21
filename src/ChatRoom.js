import React, { useState } from "react";
// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import Chats from "./Chats";

function ChatRoom() {
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || ""
  );
  // const provider = new GoogleAuthProvider();

  // const auth = getAuth();
  // const googleLogin = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const user = result.user;
  //       setUserName(user.displayName);
  //       localStorage.setItem("userName", user.displayName);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div>
      {!userName && (
        <input
          type="text"
          onBlur={(e) => {
            setUserName(e.target.value);
            localStorage.setItem("userName", e.target.value);
          }}
          className="form-control"
          placeholder="Enter your name & click outside the box to continue..."
        />
        /* <button className="btn btn-outline-danger w-100" onClick={googleLogin}>
          Signin With Google
        </button> */
      )}
      {userName && <Chats name={userName} setUser={setUserName} />}
    </div>
  );
}

export default ChatRoom;
