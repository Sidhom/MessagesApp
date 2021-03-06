import React from "react";
import { useHistory } from "react-router-dom";
import style from './MessageList.css';

const MessagesList = ({ findUser , publicMessages, connectedUser }) => {
    let history = useHistory();
    const connectedUserId= connectedUser && connectedUser._id;
    const visitePrivateMessages = (sender)=>{
        history.push({
        pathname: `/privateMessage/${sender.firstName}`,
        state: { destinationId: sender._id }
      })
    }
    
    return (
        <div className={style.globalContainer} role="messagesListContainer">
            <div>
            <h2>Public Messages</h2>
            <div className={style.privateContainer}>
            {publicMessages && publicMessages.map((message) =>{ 
                const sender = findUser(message) && findUser(message);
                return (
                    Boolean(sender && sender._id === connectedUserId) ? (
                        <div  className={`${style.youMessageContainer}` } key={message._id}>
                            <span className={style.you}>
                                YOU :
                            </span> 
                            <span className={style.yourMessage}> 
                                {message.message} 
                            </span>
                       
                        </div>
                            ) : 
                            <div  className={`${style.messageContainer}` } key={message._id}>
                         
                            <span className={style.sender}>
                                {sender && <div onClick={() =>visitePrivateMessages(sender)}>{sender.firstName}</div>} :    
                            </span> 
                            <span className={style.message}> 
                                {message.message} 
                            </span>
                        </div>
                )
                })}
                </div>
                </div>
        </div>

    )}
    
    
export default MessagesList;