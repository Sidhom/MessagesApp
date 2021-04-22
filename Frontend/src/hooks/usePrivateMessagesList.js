import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { loggedInUser } from '../store/state';

const usePrivateMessagesList = (destinationId) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [privateMessages, setPrivateMessages]= useState([]);
  const [users, setUsers] = useState(false);
 const connectedUser = useRecoilValue(loggedInUser);
 const url = 'http://localhost:3000/api/find-messages';
 const usersUrl = 'http://localhost:3000/api/find-users';
// request options
const options = {
    method: 'GET',
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
}
  const getPrivateMessages = () => {
      setLoading(true);
      fetch(url ,options).then(response =>
      response.json()).then(response => {
          setLoading(false);
          if(response.success) {
            let messages = response.messages;
            setPrivateMessages(messages && messages.filter(message => (connectedUser._id === message.senderId && destinationId === message.destinationId || (connectedUser._id === message.destinationId ))))
            setError(null);
          } else {
            setPrivateMessages([]);
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
  getPrivateMessages();
},[])

  return {
    findUser,
    connectedUser,
    error,
    privateMessages,
    loading,
    setPrivateMessages
  }
}
export default usePrivateMessagesList;