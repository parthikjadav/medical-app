import { Route, Routes } from 'react-router-dom'
import './App.css'
import Form from './comp/Form'
import Login from './comp/Login'
import Register from './comp/Register'
import { useState } from 'react'

function App() {

  const [isLoggedIn, setisLoggedIn] = useState(false)
  const [username,setUsername] = useState("")

  
  function setLogin(login,username){
   setisLoggedIn(login)
   setUsername(username)
  }
  

  if(isLoggedIn){
    return (
      <>
        <Routes>
          <Route path="/" exact element={<Form username={username}/>}></Route>
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/register" exact element={<Register />}></Route>
        </Routes>
      </>
    )
  }else {
    return (
      <>
        <Routes>
          <Route
            path="/"
            exact
            element={<Login login={setLogin} />}
          ></Route>
          <Route path="/register" exact element={<Register />}></Route>
        </Routes>
      </>
    );
  }

  
}

export default App
