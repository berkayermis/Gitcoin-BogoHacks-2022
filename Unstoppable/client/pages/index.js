import UAuth from '@uauth/js'
import React, { useEffect, useState } from 'react';

export default function App( ) {
  const [auth, setAuth] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const uauth = new UAuth({
      clientID: process.env.CLIENT_ID,
      redirectUri: process.env.REDIRECT_URI,
      scope: "openid wallet",
    }) 
    setAuth(uauth)
  }, [])

  const logingWithUAuth = async () => {
    try{
      const user = await auth.loginWithPopup()
      setUser(user)
      console.log(user)
    }
    catch(err){
      console.log(err)
    }
  }

  const logout = async () => {
    try{
      const result = await auth.logout()
      setUser(result)
      console.log(result)
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div>
      <button className='bg-green-500 p-5' onClick={logingWithUAuth}>
        login with popup
      </button>
      <br />
      <button className='bg-red-500 p-5' onClick={logout}>
        logout
      </button>
      
    </div>
  );
}
