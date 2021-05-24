import React from 'react';
import './Message.css';

function Message({msg}) {

    return (
        <>
            <p className={`chat__message ${msg.received && 'chat__receiver'}`}>
                <span className="chat__Name">{msg.name}</span>
                {msg.message}
                <span className="chat__Timestamp">{msg.time}</span>
            </p>
        </>
    )
}

export default Message
