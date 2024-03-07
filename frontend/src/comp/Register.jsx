import axios from 'axios';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    let name = useRef();
    let username = useRef();
    let password = useRef();

  const hendleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      name:name.current.value,
      username: username.current.value,
      password: password.current.value,
    };
    console.log(obj)
    
    axios.post("/api/user/register",obj).then((res) => {
      if(res.data.success){
        alert("Registered successfully");
      }
    });
  };


  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={hendleSubmit}>
        <input type="text" name="name" ref={name}/>
        <input type="text" name="username" ref={username} />
        <input type="text" name="password" ref={password} />
        <button type="submit">Submit</button>
        <Link to="/">login</Link>
      </form>
    </div>
  );
}

export default Register;
