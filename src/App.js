import React, {useState} from 'react';
//import {Route} from 'react-router-dom';
import './App.css';

import Sidebar from './components/Sidebar';

function App() {
  const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');

  // React.useEffect(() => {
  //   fetch('https://api.github.com/users/example')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // }, [])

  const strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  const analyze = (event) => {
    if(strongPassword.test(event.target.value)) {
      console.log('Hard Password')
    };
  };

  const handleLogin = (event) => {
    setUserInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${userInput}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
  }

  const setData = ({avatar_url}) => {
    setAvatar(avatar_url);
  }

  return (
    <div className="App">
      <div className="navbar">Github</div>
      <div className="login">
        <form onSubmit={handleSubmit}> 
          <label>Login</label>
          <input type="text" placeholder="Login" onChange={handleLogin}></input>
          <label>Password</label>
          <input type="password" placeholder="Password" onChange={analyze}></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
      <img src={avatar}></img>
    </div>
  );
}

export default App;
