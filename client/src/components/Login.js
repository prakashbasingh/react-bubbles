import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from"styled-components"




const LoginForm = styled.div`
display: flex;
color: blue;
`

const Button = styled.button`
margin: 2rem;
width: 200px;
background: orange;
color: green;
&:hover{
  background: green;
  color: orange;
}
`



class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  changeHandler = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then(res => {
        console.log(res.data, 'wWWWWWWWWWWWWhatttttttttt we have here???!!!!????')
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch(err => console.log(err));
  };


  render() {
    return (
      <form onSubmit={this.login}>
        <LoginForm>
           <label>Username</label>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.changeHandler}
            />
          <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.changeHandler}
            />
        </LoginForm>
    
      <Button>Log in</Button>
    </form>
    );
  }
};

export default Login;
