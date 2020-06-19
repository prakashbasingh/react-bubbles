import React, {useState} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth"

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [login, setLogin] = useState({
    username: "",
    password: "",
  })
  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post("/login", login)
    .then(res => {
      console.log(res, "what we have here")
      localStorage.setItem("token", res.data.payload)
      props.history.push("/bubblePage")
    })
    .catch(error => {
      console.log(error, " err err err err err")
    })

  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={handleSubmit}>
      <label>Username</label>
          <input className= "input"
                  type= "text"
                  name= "username"
                  value= {props.username}
                  onChange={handleChange}
        />

      <label>Password</label>
          <input className="input"
              type= "password"
              name= "password"
              value= {props.password}
              onChange={handleChange}
          />
      <button className="start">Login</button>
      </form>
    </>
  );
};

export default Login;
