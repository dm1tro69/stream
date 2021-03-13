import React, {useEffect, useState} from 'react'

const API_KEY = process.env.REACT_APP_API_KEY

const GoogleAuth = () => {

    const [isSignedIn, setIsSignedIn] = useState(null)

    useEffect(()=> {
        window.gapi.load('client: auth2', ()=> {
            window.gapi.client.init({
                clientId: API_KEY,
                scope: 'email'
            }).then(() => {
                let auth = window.gapi.auth2.getAuthInstance()
                setIsSignedIn(auth.isSignedIn.get())
                // auth.auth.isSignedIn.listen(onAuthChange)
            })
        })
    }, [])

    // const onAuthChange = () => {
    //     setIsSignedIn(isSignedIn.get())
    // }
    

    const renderAuthButton = () => {
        if (isSignedIn === null) {
            return null
        }else if (isSignedIn){
            return <button onClick={()=> setIsSignedIn(false)} className={'ui red google button'}>
                <i className="google icon"/>
                Sign Out
            </button>
        }else {
            return <button onClick={()=> setIsSignedIn(true)} className={'ui red google button'}>
                <i className="google icon"/>
                Sign In with Google
            </button>
        }
    }

return (
<div>{renderAuthButton()}</div>
)
}
export default GoogleAuth