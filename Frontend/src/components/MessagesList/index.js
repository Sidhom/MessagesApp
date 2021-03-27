import React, { useEffect } from "react";
import useMessagesList from "../../hooks/useMessagesList";
import style from './MessageList.css';

const MessagesList = () => {

  const  {findUser ,users ,error, messages, loading} = useMessagesList({});
    return (
        <div>
            <h2>Messages</h2>
            {messages && messages.map((message) =>{ 
                return (
                <div  className={style.container} key={message._id}>
                    <span className={style.sender}>
                        {findUser(message) && findUser(message).firstName} :    
                    </span> 
                    <span className={style.message}> 
                        {message.message} 
                    </span>
                </div>
                )
                })}
            
        
        </div>

    )}
    
    
export default MessagesList;