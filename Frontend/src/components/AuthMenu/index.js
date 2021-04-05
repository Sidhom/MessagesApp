import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import hooks from '../../hooks/';
import { loggedInUser } from '../../store/state';
import styles from './AuthMenu.css';


const AuthMenu = () =>{
  const {useLogout} = hooks;
  const { logout } = useLogout();
  const [loggedUser, setLoggedUser] = useRecoilState(loggedInUser);
  useEffect(() => {
   const user = localStorage.getItem('user');
      setLoggedUser(JSON.parse(user));
  },[])
  return (
          <div className={styles.container} role='menuContainer'>
               {loggedUser  ? 
              <Link role="logoutLink" className={styles.link} onClick={() => logout()} to='/'>Logout</Link>
            :(
              <Fragment>
                  <Link  role="signInLink" className={styles.link} to='/' >Sign in</Link>
                  <Link role="signUpLink" className={styles.link} to='/Inscription'>Sign up</Link>
              </Fragment>
            )}
          </div>
               )
} 
   
export default AuthMenu;