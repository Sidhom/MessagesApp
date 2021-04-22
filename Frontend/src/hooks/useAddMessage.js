import { useState } from 'react';
import usePrivateMessagesList from './usePrivateMessagesList';

const useAddMessage = ({ message, destinationId, senderId, setvalue, setPublicMessages , publicMessages}) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [privateMsg, setPrivateMsg] = useState(false);
  const {
    setPrivateMessages,
    privateMessages
  } = usePrivateMessagesList();

 const url = 'http://localhost:3000/api/add-message';
// request options
const options = {
    method: 'POST',
    body: `message=${message}&destinationId=${destinationId}&senderId=${senderId}`,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
} 
const sendMessage = () => {
      setLoading(true);
     fetch(url ,options).then(response => 
      response.json()).then(response => {
          setLoading(false);
          if(response.success) {
            setvalue('');
           if(Boolean(destinationId)) {setPrivateMessages([...privateMessages, response.message]);}
          if(Boolean(!destinationId))  setPublicMessages([...publicMessages, response.message]);
            setError(null);
          } else {
            setError(response.msg);
          }
      });
  };
  return {
    sendMessage,
    error,
    loading,
    setPrivateMsg,
    privateMsg
  }
}
export default useAddMessage;