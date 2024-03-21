import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  let username = useRef()
  let password = useRef()


  const hendleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      username: username.current.value,
      password: password.current.value
    }
    const config = {
      headers: {
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY1ZTkzZWViNDE0NWE4NmI5MDQ0MWY0NCIsIm5hbWUiOiJwYXJ0aGlrIiwidXNlcm5hbWUiOiJwYXJ0aGlrIiwicGFzc3dvcmQiOiIxMjMiLCJfX3YiOjB9LCJpYXQiOjE3MTA5MTEyMzV9.zqDVPMenkJDodFRX6YYv7zQLgE55s5wVEC1A5TVZo0Q`,
        'Content-Type': 'application/json'
      }
    };

    axios.post("/api/user/login", obj, config).then((res) => {
      if (res.data.status) {
        
      }
    })

  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={hendleSubmit}>
        <input type="text" name="username" ref={username} />
        <input type="text" name="password" ref={password} />
        <button type="submit">Submit</button>
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
}

export default Login;
