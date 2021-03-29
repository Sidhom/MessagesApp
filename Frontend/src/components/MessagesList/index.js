import React  from "react";
import style from './MessageList.css';

const MessagesList = ({findUser ,users ,error, publicMessages, privateMessages,connectedUser}) => {


    const connectedUserId=connectedUser._id;
    
    return (
        <div className={style.globalContainer}>
            <div>
            <h2>Private Messages</h2>
            <div className={style.publicContainer}>
            {privateMessages && privateMessages.map((message) =>{ 
                    const sender = findUser(message) && findUser(message);
                return (
                 Boolean(sender._id === connectedUserId) ? (
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
                        {sender.firstName} :    
                    </span> 
                    <span className={style.message}> 
                        {message.message} 
                    </span>
                </div>
                )
                })}
                    </div>
                </div>
            <div>
            <h2>Public Messages</h2>
            <div className={style.privateContainer}>
            {publicMessages && publicMessages.map((message) =>{ 
                const sender = findUser(message) && findUser(message);
                return (
                <div  className={style.messageContainer} key={message._id}>
                    <span className={style.sender}>
                        {Boolean(sender._id === connectedUserId)? 'YOU': sender.firstName} :    
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