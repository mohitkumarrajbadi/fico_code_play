import React, { useEffect } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import ConverterHome from './components/pages/converterHome';
import Header from './components/header';
import Footer from './components/footer';
import PrettifyHome from './components/pages/prettifyHome';
import ViewerHome from './components/pages/viewerHome';

const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={<PrettifyHome />}
            ></Route>
            <Route
              exact
              path="/converterHome"
              element={<ConverterHome />}
            ></Route>
            <Route
              exact
              path="/viewerHome"
              element={<ViewerHome/>}
            ></Route>
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  )
}

export default App 