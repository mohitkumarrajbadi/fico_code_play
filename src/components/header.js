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
            <li className='navbar-item'><Link to="/" >Prettify</Link></li>
            <li className='navbar-item'><Link to="/converterHome">Converter</Link></li>
            <li className='navbar-item'><Link to="/viewerHome">Viewer</Link></li>
        </ul>
    </div>
  )
}

export default Header