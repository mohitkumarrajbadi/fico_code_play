import React, { useEffect } from 'react'
import './App.css';
import JSONFormatHome from './components/pages/jsonFormatHome'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import ConverterHome from './components/pages/converterHome';
import Header from './components/header';
import Footer from './components/footer';

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
              element={<JSONFormatHome />}
            ></Route>
            <Route
              exact
              path="/converterHome"
              element={<ConverterHome />}
            ></Route>
            <Route
              exact
              path="/contact"
              element={<JSONFormatHome />}
            ></Route>
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  )
}

export default App 