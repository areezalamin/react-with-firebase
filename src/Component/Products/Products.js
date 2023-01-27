import { getAuth } from 'firebase/auth';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import './Products.css';

const auth = getAuth(app)

const Products = () => {

    const [user] = useAuthState(auth)
  return (
    <div>
        <h1>This is Products.</h1>
        <h1>This is Products woner:{user?user.displayName:'please login'}</h1>
    </div>
  )
}

export default Products