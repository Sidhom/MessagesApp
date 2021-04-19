import React  from 'react';
import style from './PrivateMessages.css';
import usePrivateMessagesList from '../../hooks/usePrivateMessagesList';

const PrivateMessages = () => {
    const {error, privateMessages, loading, setPrivateMessages} = usePrivateMessagesList();
    return (
        <div>
            <h2 data-testid="privateMessages">Private Messages</h2>
            <div className={style.publicContainer}>
            {privateMessages && privateMessages.map((message) =>{ 
                    const sender = findUser(message) && findUser(message);
                return (
                 Boolean( sender && sender._id === connectedUserId) ? (
                <div  data-testid="yourMessages"  className={`${style.youMessageContainer}`  } key={message._id}>
                    <span className={style.you}  data-testid="you">
                        YOU :
                    </span> 
                    <span className={style.yourMessage}> 
                        {message.message} 
                    </span>
               
                </div>
                    ) : 
                    <div data-testid="otherMessages"  className={`${style.messageContainer}`  } key={message._id}>
                 
                    <span data-testid="senderName" className={style.sender}>
                        {sender && sender.firstName} :    
                    </span> 
                    <span className={style.message}> 
                        {message.message} 
                    </span>
                </div>
                )
                })}
                    </div>
                </div>
    )
}

export default PrivateMessages;