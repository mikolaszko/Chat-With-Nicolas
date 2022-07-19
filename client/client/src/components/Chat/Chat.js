//MUI imports

import {
  AttachFile,
  MoreVert,
  SearchOutlined,
  InsertEmoticon,
} from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MicIcon from '@mui/icons-material/Mic';

import { useStateValue } from '../../StateProvider';

import './Chat.css';
import axios from '../axios';

function Chat({ messages }) {
  const [{ user }, dispatch] = useStateValue();
  const [seed, setSeed] = useState('');
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post('/messages/new', {
      message: input,
      name: user.displayName,
      timestamp: new Date().toLocaleTimeString(),
      received: true,
    });
    setInput('');
  };

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className='chat'>
      <div className='chat_header'>
        <Avatar
          src={
            'https://media-exp2.licdn.com/dms/image/C4E0BAQGIlYsjeJ1xcg/company-logo_200_200/0/1620334581399?e=2147483647&v=beta&t=ILX3XXTqOao8Y5yAuBMjn9SUvkdFlaK4CiHQfhHYK_0'
          }
        />
        <div className='chat_headerInfo'>
          <h3>Project done by Mikołaj Sodzawiczny</h3>
          <p>
            Last seen at at {''} {messages[messages.length - 1]?.timestamp}
          </p>
        </div>
        <div className='chat_headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className='chat_body'>
        {messages.map((message) => (
          <p
            className={`chat_message ${
              message.name === user.displayName && 'chat_receiver'
            }`}
          >
            <span className='chat_name'>{message.name}</span>
            {message.message}
            <span className='chat_timestamp'>{message.timestamp}</span>
          </p>
        ))}
      </div>
      <div className='chat_footer'>
        <InsertEmoticon />
        <form>
          <input
            placeholder='Type a message'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type='text'
            required
          ></input>
          <button onClick={sendMessage} type='submit'>
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
