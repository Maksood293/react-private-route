import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export default function Navbar(props) {
  const [auth, setauth] = useState();
  // function handleChange(event) {
  // // Here, we invoke the callback with the new value
  // props.onChange(event.target.auth);

  function handleChange() {
    props.updateAuth(true);
    setauth(true);
  }
  function handleChange1() {
    props.updateAuth(false);
    setauth(false);
  }
  //   const handlechange2 = () => {
  //     setauth(true);
  //   };
  return (
    <div className="mainNav">
      <div className="logo">
        <h4>Maksood</h4>
      </div>
      <div className="link">
        <ul className="mainUl">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/Post" style={display(auth)}>
            <li>Post</li>
          </Link>
          <Link to="/About">
            <li>About</li>
          </Link>
          <Link to="/Dashboard" style={display(auth)}>
            <li>Dashboard</li>
          </Link>
          <br />
          <br />
          <button
            style={{ padding: "10px" }}
            // style={display(!auth)}
            onClick={handleChange}
            style={display(!auth)}
          >
            login
          </button>
          <button
            style={{ padding: "10px" }}
            onClick={handleChange1}
            style={display(auth)}
          >
            logout
          </button>
        </ul>
      </div>
    </div>
  );
}

function display(auth) {
  return {
    display: auth ? "block" : "none",
  };
}
