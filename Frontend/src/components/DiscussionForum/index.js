import React from "react";
import MessageList from "../MessagesList"
import AddMessage from "../AddMessage";
import style from './DiscussionForum.css';

const DiscussionForum = () => {
    return (
        <div>
        <MessageList />
        <div className={style.addMessageContainer}>
        <AddMessage />
        </div>
        </div>
    );
       
        }
    
export default DiscussionForum;
