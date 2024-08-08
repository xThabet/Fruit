import React ,{createContext, useState} from 'react'
import ComponentB from './ComponentB'
export const UserContext = createContext() 
function ComponentA(){
    const [user , setUser]= useState("Thabet")
    return(
        <div className='box'>
            <h1>
                ComponentA
            </h1>
            <h2>
                {`hello ${user}`}
            </h2>
            <UserContext.Provider value={user}>
            <ComponentB user="Thabet"/>
            </UserContext.Provider>
        </div>
    )
}
export default ComponentA