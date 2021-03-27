import { useEffect, useState } from 'react';

const useMessagesList = ({  }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState(false);
  const [users, setUsers] = useState(false);
    
 const url = 'http://localhost:3000/api/find-messages';
 const usersUrl = 'http://localhost:3000/api/find-users';
// request options
const options = {
    method: 'GET',
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
}
  const getMessages = () => {
      setLoading(true);
      fetch(url ,options).then(response =>
      response.json()).then(response => {
        console.log(response);
          setLoading(false);
          if(response.success) {
            setMessages(response.messages);
            setError(null);
          } else {
            setMessages([]);
            setError(response.msg);
          }
      });
     return !!messages;
  };
  const getUsers = () => {
    setLoading(true);
    fetch(usersUrl ,options).then(response =>
    response.json()).then(response => {
        setLoading(false);
        if(response.success) {
          setUsers(response.users);
          setError(null);
        } else {
          setUsers([]);
          setError(response.msg);
        }
    });
   return !!setUsers;
};
const findUser = (message) => {
return users.find(user => user._id === message.senderId);
}
useEffect(()=> {
  getUsers();
  getMessages();
},[])

  return {
    findUser,
    users,
    error,
    messages,
    loading
  }
}
export default useMessagesList;