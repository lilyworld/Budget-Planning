import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";


function Navigation_bar(Pros){
    return (
        <div className="navigation_bar">
        <Router>
          <div className="navigation_item">
            <Link to="/users/Login"> Login </Link>
            <Link to="/users"> Register</Link>
           </div>
          <Switch>
            <Route path="/users" exact component={Register} />
            <Route path="/users/login" exact component={Login} />
          </Switch>

        </Router>
       </div>
      
    );
  };

  export default Navigation_bar;