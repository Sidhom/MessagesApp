import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { loggedInUser } from '../store/state';

const useMessagesList = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [publicMessages, setPublicMessages] = useState([]);
  const [users, setUsers] = useState(false);
 const connectedUser = useRecoilValue(loggedInUser);
 const [time, setTime]= useState({});
 let interval = setInterval(() => setTime({ time: Date.now() }), 10000);
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
          setLoading(false);
          if(response.success) {
            let messages = response.messages;
            setPublicMessages(messages && messages.filter(message => message.destinationId === "undefined" || message.destinationId === ''));
            setError(null);
          } else {
            setPublicMessages([]);
            setError(response.msg);
          }
      });
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
};
const findUser = (message) => {
return users && users.find(user => user._id === message.senderId);
}
useEffect(()=> {
  getUsers();
  getMessages();
},[])
useEffect(()=> {
  const interval = setInterval(() => {
    getMessages();
  }, 2000);
  return () => clearInterval(interval);

},[])

  return {
    getUsers,
    getMessages,
    findUser,
    users,
    error,
    publicMessages,
    loading,
    connectedUser,
    setPublicMessages
  }
}
export default useMessagesList;