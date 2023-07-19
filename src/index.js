import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
const root = ReactDOM.createRoot(document.getElementById("root"));

const firebaseConfig = {
  apiKey: "AIzaSyCc0O03PNrhOI46Coqye9XJv5qq1owU9QM",
  authDomain: "chatroom-f3dce.firebaseapp.com",
  databaseURL:
    "https://chatroom-f3dce-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chatroom-f3dce",
  storageBucket: "chatroom-f3dce.appspot.com",
  messagingSenderId: "431610684207",
  appId: "1:431610684207:web:f9fc40c544ef6ddf4577da",
};

const app = initializeApp(firebaseConfig);

root.render(
    <App notUse={app} />
);
