import React from 'react';
import './ChatBox.css';

const ChatBox = () => {
  return (
    <div className="chat-box">
      <div className="chat-box-header">
        <h2>Longlong</h2>
      </div>
      <div className="chat-box-content">
        {/* 这里可以添加聊天内容 */}
      </div>
      <div className="chat-box-input">
        <input type="text" placeholder="Your message" />
      </div>
    </div>
  );
};

export default ChatBox;