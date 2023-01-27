import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import app from '../firebase.init'

const auth = getAuth(app);

const useFirebase = () =>{

    const [user, setUser] = useState({})

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result) =>{
            const user = result.user;
            setUser(user);
            console.log(user)
        })
        .catch((error) =>{
            console.error(error)
        })

    }

    const handleSignOut = () =>{
        signOut(auth)
        .then(() =>{})
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            setUser(user);
        })
    } ,[])


    return {signInWithGoogle, user, handleSignOut}
}
export default useFirebase