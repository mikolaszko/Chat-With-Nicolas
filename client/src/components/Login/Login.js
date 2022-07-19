import React from 'react';
import { Button } from '@mui/material';
import './Login.css';
import { auth, provider } from '../../firebase';
import { actionTypes } from '../reducer';
import { useStateValue } from '../../StateProvider';

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <div className='login_container'>
        <img
          src='http://assets.stickpng.com/images/5b4a215cc051e602a568cd7c.png'
          alt='Leaf logo from Animal Crossing'
        />
        <div className='login_text'>
          <h1>Sing in to Messaging App</h1>
        </div>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
