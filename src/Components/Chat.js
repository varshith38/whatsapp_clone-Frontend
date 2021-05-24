import React, { useState } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import Message from './Message';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import KeyboardVoiceOutlinedIcon from '@material-ui/icons/KeyboardVoiceOutlined';
import axios from '../api';

function Chat({messages}) {

    const [input, setInput] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post('/messages/new',{
            message: input,
            name: "varshith",
            time: "Just now",
            received: false
        });

        setInput('');
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p> Last seen</p>
                </div>
                <div className="chat__headerRight">
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

            <div className="chat__body">
                {messages.map(msg => {
                    return <Message msg={msg}/>
                })}
            </div>

            <div className="chat__footer">
                <IconButton>
                    <EmojiEmotionsOutlinedIcon />
                </IconButton>
                <form>
                    {/* <input value={input} onChange={ e => e.target.value} type="text" placeholder="Type a message" /> */}
                    <input
                    type="text"
                    placeholder="Type a message"
                    value={input}
                    onChange={ e => setInput(e.target.value)} />
                    <button onClick={handleSubmit} type="submit">Send a message</button>
                </form>
                <IconButton>
                    <KeyboardVoiceOutlinedIcon />
                </IconButton>
                
            </div>
        </div>
    )
}

export default Chat
