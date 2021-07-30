import React, { useState, useContext } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext);


  let history = useHistory();

  const login = () => {
    const data = { email: email, password: password };
    axios.post("http://localhost:4990/users/login", data).then((response) => {
      if(response.data.error){
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.token); 
        setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
        history.push("/");  //Push to home page when login successfully 
      } 
    });
  };
  return (
    <div className="loginContainer" id="login1">
      
      <div className="loginContent">
        <h1>Login</h1>
      <label><strong>Email:</strong></label>
      <input
      id="inputlogin"
        type="text"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <label><strong>Password:</strong></label>
      <input
      id="inputlogin"
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <button id="login_bt" onClick={login}> Login </button>
      <a href="http://localhost:3000/"><button id="close" >Cancel</button></a>
      </div>
    </div>
  );
}

export default Login;
