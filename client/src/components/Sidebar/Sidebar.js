import React, { useState } from 'react';
import './Sidebar.css';

import SidebarChat from './SidebarChat/SidebarChat';
import { useStateValue } from '../../StateProvider';

//MUI Imports
import { Avatar, IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Sidebar({ messages }) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='sidebar'>
      <div className='sidebar_header'>
        <Avatar src={user?.photoURL} />
        <div className='sidebar_headerRight'>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='sidebar_search'>
        <div className='sidebar_searchContainer'>
          <SearchOutlinedIcon />
          <input placeholder='Search or start new chat' type='text' />
        </div>
      </div>
      <div className='sidebar_chats'>
        <SidebarChat messages={messages} />
      </div>
    </div>
  );
}

export default Sidebar;
