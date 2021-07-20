import React from 'react'
import axios from "axios";
import {useEffect, useState} from "react";

function login() {
    const [listOfUsers, setListOfUsers] = useState([]);

   useEffect(() => {
     axios.get("http://localhost:4990/users").then((response) => {
       setListOfUsers(response.data);
     });
   }, []);

    return (
        <div>
            {listOfUsers.map((value, key) => {
                return (
                    <div className = "users">
                        <div className="username"> {value.username}</div>
                        <div className="password"> {value.password}</div>
                    </div>
                );
            })};
        </div>
    );
}

export default login;
