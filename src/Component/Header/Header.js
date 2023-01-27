import { getAuth, signOut } from 'firebase/auth';
import React from 'react'
import { useAuthState} from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom'
import app from '../../firebase.init'
import './Header.css'

const auth = getAuth(app);

const Header = () => {

  const [user] = useAuthState(auth);

  return (
    <nav>
      <ul className='Header'>
        <li>
          <NavLink to="/" exact='true'   style={({ isActive, isPending }) => {
            return {
                  color: isActive ? "red" : "inherit",
                };
              }}
              className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
              }}
          >Home</NavLink>
        </li>
        
        <li>
        <span className='logOut'>{user?.displayName && user.displayName}</span>
              {
                user?.uid 
                ?
                <NavLink to="/login" onClick={() => signOut(auth)}  style={({ isActive, isPending }) => {
                  return {
                        color: isActive ? "red" : "inherit",
                      };
                    }}
                    className={({ isActive, isPending }) => {
                      return isActive ? "active" : isPending ? "pending" : "";
                    }}
                  >Logout</NavLink>
                :
                <NavLink to="/login"  style={({ isActive, isPending }) => {
              return {
                    color: isActive ? "red" : "inherit",
                  };
                }}
                className={({ isActive, isPending }) => {
                  return isActive ? "active" : isPending ? "pending" : "";
                }}
              >Login</NavLink>
              }
        </li>
        <li>
          <NavLink to="/Registration"  style={({ isActive, isPending }) => {
            return {
                  color: isActive ? "red" : "inherit",
                };
              }}
              className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
              }}
          >Registration</NavLink>
        </li>
        <li>
          <NavLink to="/Products"  style={({ isActive, isPending }) => {
            return {
                  color: isActive ? "red" : "inherit",
                };
              }}
              className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
              }}
          >Products</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header