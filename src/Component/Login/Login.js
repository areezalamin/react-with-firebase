import { getAuth } from 'firebase/auth'
import React from 'react'
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import app from '../../firebase.init'
import './Login.css'


const auth = getAuth(app);

const Login = () => {

  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn =()=>{
    signInWithGoogle()
    .then(() =>{
      navigate(from, { replace: true });
    })
  }

  return (
    <div>
      <h1>Please click on Login button below.</h1>
      <button className='login' onClick={handleGoogleSignIn}>Login</button>
    </div>
    
  )
}

export default Login