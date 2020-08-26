import React from 'react';
import auth from './auth';


export default (props) => {
  return (
    <div>
      <h1>Login page</h1>
      <button 
        onClick={() => {
          auth.login(() => {
            props.history.push("./Sidebar")
          })
        }}>Login</button>
    </div>
  )
}