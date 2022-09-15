import MoreVert from '@mui/icons-material/MoreVert'
import Search from '@mui/icons-material/Search'
import { Avatar, IconButton } from '@mui/material'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import React from 'react'
import "./Chat.css"
// import SelectInput from '@mui/material/Select/SelectInput';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';


const Chat = () => {
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
        <p className="chat__message">
          <span className="chat__name">Sonny</span>

          This is a message

          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>
        <p className="chat__message chat__receiver">
          <span className="chat__name">Sonny</span>

          This is a message

          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        
        <form>
          <input placeholder="Type a message"
            type="text"
          />
          <button type="submit">
            send a message
          </button>
        </form>
      </div>

    </div>
  )
}

export default Chat