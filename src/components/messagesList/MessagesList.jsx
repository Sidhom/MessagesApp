import React, { useState } from "react";

const MessagesList = () => {
const [message, setMessage] = useState("");
const onInputChange = (event) => {
       setMessage(event.target.value);
    }

            return (
                <form>
                    <input type="text"
                        value={message}
                        onChange={onInputChange}
                    />
                    <h1>{message}</h1>
                </form>
            );
        }
    
export default MessagesList;