import { useState } from 'react';
import useFormValidation from './useFormValidation';

const useAddMessage = ({ messageRef, message, privacyRef, privacy}) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { allFieldsAreValid } = useFormValidation({ inputRefs: [messageRef, privacyRef], inputValues : [message, privacy] });
  
 const url = 'http://localhost:3000/api/add-message';
// request options
const options = {
    method: 'POST',
    body: `message=${message}&private=${privacy}`,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}
  const send = () => {
      setLoading(true);
      fetch(url ,options).then(response => 
      response.json()).then(response => {
          setLoading(false);
          if(response.success) {
            //setMessageValue(response.message);
            setError(null);
          } else {
            //setMessageValue(null);
            setError(response.msg);
          }
      });
     return !!message;
  };
  return {
    send,
    error,
    message,
    loading,
    allFieldsAreValid
  }
}
export default useAddMessage;