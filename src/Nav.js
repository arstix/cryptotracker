import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Logo from './images/cryptologo.png'

function Navigation() {
    return (
        <div>
        <div className="tracker__menu">
        <img src={Logo} style={{width: "150px", marginLeft: "-200px"}}/>
            <Link to="/">
              <b>Home</b>
            </Link>
            <Link to="/portfolio">
            <b>Portfolio</b>
            </Link>
        </div>
        </div>
    )
}

export default Navigation
