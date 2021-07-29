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
        history.push("/");
      } 
    });
  };
  function close_screen(){
    document.getElementById("login1").style.display="none";  
    }
  return (
    <div className="loginContainer" id="login1">
      
      <div className="loginContent">
        <h1>Login</h1>
      <label><strong>Email:</strong></label>
      <input
        type="text"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <label><strong>Password:</strong></label>
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <button id="login_bt" onClick={login}> Login </button>
      <button id="close" onClick={close_screen}>Cancel</button>
      </div>
    </div>
  );
}

export default Login;
