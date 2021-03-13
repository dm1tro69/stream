import React, {useEffect, useState} from 'react'
import {signIn, signOut} from "../actions";
import {useDispatch, useSelector} from "react-redux";

const API_KEY = process.env.REACT_APP_API_KEY

const GoogleAuth = () => {

    const dispatch = useDispatch()
    const isSignedIn = useSelector(state => state.auth.isSignedIn)
    const [auth, setAuth] = useState(null);

    // const [isSignedIn, setIsSignedIn] = useState(null)

    useEffect(()=> {
        let auth
        window.gapi.load('client: auth2', ()=> {
            window.gapi.client.init({
                clientId: API_KEY,
                scope: 'email'
            }).then(() => {
                auth = window.gapi.auth2.getAuthInstance();
                setAuth(auth);
                onAuthChange(auth.isSignedIn.get())
                // auth.auth.isSignedIn.listen(onAuthChange)
            })
        })
    }, [])

    const onAuthChange = (isSignedIn) => {
        if (isSignedIn){
            dispatch(signIn(auth.currentUser.get().getId()))
        }else {
            dispatch(signOut())
        }
    }
    

    const renderAuthButton = () => {
        if (isSignedIn){
            return <button onClick={()=> dispatch(signOut())} className={'ui red google button'}>
                <i className="google icon"/>
                Sign Out
            </button>
        }else {
            return (
                <button onClick={()=> dispatch(signIn())} className={'ui red google button'}>
                    <i className="google icon"/>
                    Sign In with Google
                </button>
            )
        }
    }

return (
<div>{renderAuthButton()}</div>
)
}
export default GoogleAuth