import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import Pusher from 'pusher-js';
import axios from './api';

function App() {

  const [messages, setMessages] = useState([])

  useEffect( () => {
    axios.get('/messages/sync')
        .then( res => {
          setMessages(res.data)
        })
  }, []);

  useEffect( () => {
    const pusher = new Pusher('71a6b20e4c83f2bc844c', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  } , [messages]);
  
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
