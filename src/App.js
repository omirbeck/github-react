import React from 'react';
//import {Route} from 'react-router-dom';
import './App.css';

import Sidebar from './components/Sidebar';

function App() {

  React.useEffect(() => {
    fetch('https://api.github.com/users/example')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  const strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  const analyze = (event) => {
    if(strongPassword.test(event.target.value)) {
      console.log('Hard Password')
    };
  };



  return (
    <div className="App">
      <div className="navbar">Github</div>
      <div className="login">
        <form>
          <label>Login</label>
          <input type="text" placeholder="Login"></input>
          <label>Password</label>
          <input type="password" placeholder="Password" onChange={analyze}></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>

      <Sidebar />
    </div>
  );
}

export default App;
