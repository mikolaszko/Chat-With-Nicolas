import React, { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import './SidebarChat.css';

function SidebarChat({ messages }) {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className='sidebarChat'>
      <Avatar
        src={
          'https://media-exp2.licdn.com/dms/image/C4E0BAQGIlYsjeJ1xcg/company-logo_200_200/0/1620334581399?e=2147483647&v=beta&t=ILX3XXTqOao8Y5yAuBMjn9SUvkdFlaK4CiHQfhHYK_0'
        }
      />
      <div className='sidebarChat_info'>
        <h2>Group chat</h2>
        <p>{messages[messages.length - 1]?.message}</p>
      </div>
    </div>
  );
}

export default SidebarChat;
