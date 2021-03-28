import React  from "react";
import useMessagesList from "../../hooks/useMessagesList";
import style from './MessageList.css';

const MessagesList = () => {

    const  {findUser ,users ,error, publicMessages, privateMessages,connectedUser, loading} = useMessagesList({});
    const connectedUserId=connectedUser._id;
    
    return (
        <div className={style.globalContainer}>
            <div>
            <h2>Private Messages</h2>
            <div className={style.publicContainer}>
            {privateMessages && privateMessages.map((message) =>{ 
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