import React from "react";
import { Link } from 'react-router-dom';
import style from './MessageList.css';

const MessagesList = ({ findUser , publicMessages, privateMessages, connectedUser }) => {


    const connectedUserId= connectedUser && connectedUser._id;
    
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
                                {sender && <Link to={`/privateMessage/${sender.firstName}`}>{sender.firstName}</Link>} :    
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