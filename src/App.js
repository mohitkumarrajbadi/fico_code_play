import React, { useEffect } from 'react'
import LeftTextArea from './components/leftTextArea'
import RightTextArea from './components/rightTextArea'
import ButtonsContainer from './components/buttonsContainer'
import Footer from './components/footer'
import './App.css';
import jsonFormatter from './components/scripts/formatter'
import Header from './components/header'

const App = () => {

  useEffect(() => {
    jsonFormatter();
  });

  return (
    <>
    <Header/>
      <div className='container'>
        <LeftTextArea />
        <ButtonsContainer />
        <RightTextArea />
      </div>
      <Footer />
    </>
  )
}

export default App 