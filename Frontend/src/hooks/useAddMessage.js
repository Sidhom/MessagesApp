import { useState } from 'react';

const useAddMessage = ({ messageRef, message, privacyRef, destinationId, senderId}) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  
 const url = 'http://localhost:3000/api/add-message';
// request options
const options = {
    method: 'POST',
    body: `message=${message}&destinationId=${destinationId}&senderId=${senderId}`,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}
async const sendMessage = () => {
      setLoading(true);
    await  fetch(url ,options).then(response => 
      response.json()).then(response => {
          setLoading(false);
          if(response.success) {
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
  }
}
export default useAddMessage;