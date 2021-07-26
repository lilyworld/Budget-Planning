import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { AuthContext } from "../helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";


function Navigation_bar(Pros){
    const [authState, setAuthState] = useState({
        username: "",
        id: 0,
        status: false,
      });
    
      useEffect(() => {
        axios
          .get("http://localhost:4990/users", {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          })
          .then((response) => {
            if (response.data.error) {
              setAuthState({ ...authState, status: false });
            } else {
              setAuthState({
                username: response.data.username,
                id: response.data.id,
                status: true,
              });
            }
          });
      }, []);
    
      const logout = () => {
        localStorage.removeItem("accessToken");
        setAuthState({ username: "", id: 0, status: false });
      };

    return (
        <div className="navigation_bar">
        <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>
          <div className="navigation_item">
          {!authState.status && (
            <>
            <Link to="/users/login"> Login </Link>
            <Link to="/users"> Register</Link>
            </>
          )}
           </div>
           <div className="loggedInContainer">
              <h1>{authState.username} </h1>
              {authState.status && <button onClick={logout}> Logout</button> }
          </div>
          <Switch>
            <Route path="/users" exact component={Register} />
            <Route path="/users/login" exact component={Login} />
          </Switch>

        </Router>
        </AuthContext.Provider>
       </div>
      
    );
  };

  export default Navigation_bar;
