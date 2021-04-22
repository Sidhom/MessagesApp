import React, {useEffect} from "react";
import MessageList from "../MessagesList"
import AddMessage from "../AddMessage";
import useMessagesList from "../../hooks/useMessagesList";
import style from './DiscussionForum.css';
import usePrivateMessagesList from "../../hooks/usePrivateMessagesList";

const DiscussionForum = () => {
    const  messagesListProps = useMessagesList();
    const {setIsNewMessageSent} = usePrivateMessagesList();
    useEffect(()=> {
console.log('render')
    },[messagesListProps && messagesListProps.publicMessages])
    return (
        <div className={style.container} data-testid="discussionForumContainer">
            <div className={style.messagesList}>
        <MessageList {...messagesListProps} />
        </div>
        <div className={style.addMessageContainer}>
        <AddMessage   
            setPublicMessages = {messagesListProps.setPublicMessages}
            publicMessages = {messagesListProps.publicMessages}
            privateMessages = {messagesListProps.privateMessages}
            users = {messagesListProps && messagesListProps.users}
            setIsNewMessageSent={setIsNewMessageSent}
            publicView={true}
                      />
        </div>
        </div>
    );
       
        }
    
export default DiscussionForum;
