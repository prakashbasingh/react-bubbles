import React, {useState} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth"
import styled from "styled-components"

const FormContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
box-shadow: 0 0 5px 2px forestgreen;
font-size: 20px;
background:forestgreen;
color: red; 
margin: 0 10rem;
height: 45px;
`
const Button= styled.button`
margin: 0 2rem;
width: 200px;
background: orange;
&:hover{
  font-size: 20px;
  font-weight: bold;
  background: gold;
  color: red;
}
`

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
      <form onSubmit={handleSubmit}>
        <FormContainer>
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
          <Button >Login</Button>
        </FormContainer>
      </form>
    </>
  );
};

export default Login;
