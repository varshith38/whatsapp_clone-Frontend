import React from 'react';
import './SidebarChats.css';
import { Avatar } from '@material-ui/core';

function SidebarChats() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>Casual room</p>
            </div>
        </div>
    )
}

export default SidebarChats
