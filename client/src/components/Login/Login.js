import React from 'react';
import { Button } from '@mui/material';
import './Login.css';
import { auth, provider } from '../../firebase';
import { actionTypes } from '../reducer';
import { useStateValue } from '../../StateProvider';
import logo from './Animal_Crossing_Leaf.png';

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
        <img src={logo} alt='Leaf logo from Animal Crossing' />
        <div className='login_text'>
          <h1>Sing In into Messaging App</h1>
        </div>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
