import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./comp/Form";
import Login from "./comp/Login";
import Register from "./comp/Register";
import { useState } from "react";
import getToken from "./comp/getToken";

function App() {
  const token = getToken()

  if (token) {
    return (
      <>
        <Routes>
          <Route path="/" exact element={<Form />}></Route>
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/register" exact element={<Register />}></Route>
        </Routes>
      </>
    );
  } else {
    return (
      <>
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/register" exact element={<Register />}></Route>
        </Routes>
      </>
    );
  }
}

export default App;
