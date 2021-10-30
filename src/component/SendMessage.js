import React, { useState,useEffect } from "react";
import { Button, Input } from "@mui/material";
import { db, auth } from "../firebase";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";

function SendMessage({scroll}) {
  const [msg, setMsg] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    const collectionRef = collection(db, "messages");
    const payload = { text: msg, photoURL, uid, timestamp: serverTimestamp() };
    setMsg("");
    await addDoc(collectionRef, payload);
    scroll.current.scrollIntoView({ behavior: 'smooth' })
  };
  useEffect(() => 
    scroll.current.scrollIntoView({ behavior: 'smooth' })
  )
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            value={msg}
            onChange={(event) => setMsg(event.target.value)}
            placeholder="Aa"
          />
          <Button
            style={{
              width: "18%",
              fontSize: "15px",
              fontWeight: "550",
              margin: "4px 5% -13px 5%",
              maxWidth: "200px",
            }}
            disabled={!msg}
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
