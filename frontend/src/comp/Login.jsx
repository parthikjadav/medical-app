import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({login}) => {

    let username = useRef()
    let password = useRef()

    const [userLocal, setuserLocal] = useState()

const hendleSubmit=(e)=>{
 e.preventDefault();
 let obj = {
  username: username.current.value,
  password: password.current.value
 }
 axios.post("/api/user/login",obj).then((res)=>{
   login(res.data.success,res.data.user.name);
 })
 
}

  return (
    <div>
    <h1>Login Page</h1>
      <form  onSubmit={hendleSubmit}>
        <input type="text" name="username" ref={username}/>
        <input type="text" name="password" ref={password}/>
        <button type="submit">Submit</button>
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
}

export default Login;
