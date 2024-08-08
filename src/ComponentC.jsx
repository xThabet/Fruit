import React ,{useState , useContext} from 'react'
import ComponentD from './ComponentD'
import {UserContext} from './ComponentA'
function ComponentC(){
    const user = useContext(UserContext);
    return(
        <div className='box'>
            <h1>
                ComponentC
            </h1>
            <h2>
                {`hello ${user}`}
            </h2>
            <ComponentD />
        </div>
    )
}
export default ComponentC