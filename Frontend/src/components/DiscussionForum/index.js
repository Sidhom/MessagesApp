import React from "react";
import MessageList from "../MessagesList"
import AddMessage from "../AddMessage";
import useMessagesList from "../../hooks/useMessagesList";
import style from './DiscussionForum.css';

const DiscussionForum = () => {
    const  messagesListProps = useMessagesList({});
    return (
        <div className={style.container}>
            <div className={style.messagesList}>
        <MessageList {...messagesListProps} />
        </div>
        <div className={style.addMessageContainer}>
        <AddMessage   setPublicMessages = {messagesListProps.setPublicMessages}
                      setPrivateMessages = {messagesListProps.setPrivateMessages}
                      publicMessages = {messagesListProps.publicMessages}
                      privateMessages = {messagesListProps.privateMessages}
                      users = {messagesListProps && messagesListProps.users}
                      />
        </div>
        </div>
    );
       
        }
    
export default DiscussionForum;
