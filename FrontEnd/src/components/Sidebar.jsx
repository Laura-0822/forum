import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [channels, setChannels] = useState(['Work', 'Meet', ]);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Ikun</h2>
      </div>
      <div className="sidebar-menu">
        <ul>
        <li>All chats</li>
          <li className="channels-title">Channels</li>

          <ul>
            {channels.map((channel, index) => (
              <li key={index}>{channel}</li>
            ))}
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;