import { useState } from 'react';
import useFormInput from './useFormInput';

const useAddMessage = ({ messageRef, message, privacyRef, destinationId, senderId, setValue, setPublicMessages ,setPrivateMessages, publicMessages, privateMessages}) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [privateMsg, setPrivateMsg] = useState(false);

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
  console.log('')
      setLoading(true);
     fetch(url ,options).then(response => 
      response.json()).then(response => {
          setLoading(false);
          if(response.success) {
            setValue('');
            console.log('options', options)
           if(Boolean(destinationId)) setPrivateMessages([...privateMessages, response.message]);
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