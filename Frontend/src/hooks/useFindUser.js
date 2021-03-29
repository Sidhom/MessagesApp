import { useEffect, useState } from 'react';

const useFindUser = (users) => {
  const [user, setUser] = useState('');
  const [searchedUser, setSearchedUser] = useState('');

  const handleChange = e => {
    setUser(e.target.value);
  }
  useEffect(()=> {
    if(!user) setSearchedUser('');
    const searchedUser = user  && users.find(us =>Boolean(us.firstName.toLowerCase() === user.toLowerCase()));
   setUser(searchedUser && searchedUser.firstName);
   setSearchedUser(searchedUser);
  },[user])
  return {
    value: user,
    onChange: handleChange,
    setUser,
    searchedUser,
    setSearchedUser
  }
}
export default useFindUser;