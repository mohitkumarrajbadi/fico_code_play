import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const Header = () => {
  return (
    <div>
        <ul className='navbar-list'>
            <li className='navbar-item'><Link to="/">JSON Beutify</Link></li>
            <li className='navbar-item'><Link to="/converterHome">XML JSON Converter</Link></li>
            <li className='navbar-item'><Link to="/contact">Contacts Test</Link></li>
        </ul>
    </div>
  )
}

export default Header