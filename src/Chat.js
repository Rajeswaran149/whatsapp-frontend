import MoreVert from '@mui/icons-material/MoreVert'
import Search from '@mui/icons-material/Search'
import { Avatar, IconButton } from '@mui/material'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import React, { useState } from 'react'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from "./axios";
import moment from 'moment';
import SendIcon from '@mui/icons-material/Send';


import "./Chat.css"


const Chat = ({ messages }) => {

  const [input,setInput] = useState("");

const sendMessage = async(e) => {
  e.preventDefault();
  const time = moment().format('LT')
  await axios.post('/messages/new',{
    message: input,
    name: "rajes",
    timestamp: time,
    received : true,
  });
  
   setInput("");

}

  return (
    <div className="chat">

      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => (
          <p className={`chat__message ${message.received && "chat__receiver"}`}>
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">
              {message.timestamp}
            </span>
          </p>
        ))}

      </div>
      
      <div className="chat__footer">
        <InsertEmoticonIcon />

        <form>
          <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />
          <SendIcon className="send" onClick={sendMessage} type="submit"></SendIcon>
          {/* <button onClick={sendMessage} type="submit">send a message</button> */}
        </form>
        <MicIcon />
      </div>

    </div>
  )
}

export default Chat