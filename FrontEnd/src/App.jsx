import { useState } from 'react'
import Sidebar from './components/Sidebar';
import ChatList from './components/ChatList';
import ChatBox from './components/ChatBox';
import './App.css'


const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <ChatList />
      <ChatBox />
    </div>
  );
};

export default App
