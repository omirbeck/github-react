import React, { useState, useRef } from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './components/auth';
import './App.css';

import Sidebar from './components/Sidebar';
import Login from './components/Login';
import ProtectedRoute from './components/protected.route';

function App(props) {
  const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');
  const [login, setLogin] = useState(false);
  const [pass, setPass] = useState(false);
  const inputRef = useRef(null);
  const inputPassRef = useRef(null);

  // React.useEffect(() => {
  //   fetch('https://api.github.com/users/example')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // }, [])

  const strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  const analyze = () => {
    strongPassword.test(inputPassRef.current.value) ? setPass(true) : setPass(false)
  };

  const handleLogin = (event) => {
    setUserInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pass) {
      console.log('pass')
      fetch(`https://api.github.com/users/${inputRef.current.value}`)
        .then(response => response.json())
        .then(data => {
          if (data.message) {
            setLogin(false);
          } else {
            setLogin(true);
            setData(data);
          }
        })
    }
  }


  const setData = ({ avatar_url }) => {
    setAvatar(avatar_url);
  }

  return (
    <div className="App">
      <div className="navbar">Github</div>
      <Route exact path="/sidebar" component={Sidebar} />
      <ProtectedRoute exact path="/" component={Login} />
      <div className="login">
        <form onSubmit={(event) => {
            event.preventDefault()
            auth.login(() => {
                props.history.push("/sidebar")
              })
            }}>
          <label>Login</label>
          <input ref={inputRef} type="text" placeholder="Login"></input>
          <label>Password</label>
          <input ref={inputPassRef} type="password" placeholder="Password"></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
      <img src={avatar}></img>
    </div>
  );
}

export default App;
