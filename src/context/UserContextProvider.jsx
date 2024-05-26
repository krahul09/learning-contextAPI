import React, { useState } from 'react'
import userContext from './userContext'

const UserContextProvider = ({children}) => {

   const [user, setUser] = useState(null);

  return (

    <div>
      <userContext.Provider value={{user, setUser}}>
        {children}
      </userContext.Provider>
    </div>
  )
}

export default UserContextProvider
