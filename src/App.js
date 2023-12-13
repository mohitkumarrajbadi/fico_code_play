import React from 'react'
import LeftTextArea from './components/leftTextArea'
import RightTextArea from './components/rightTextArea'
import ButtonsContainer from './components/buttonsContainer'
import Footer from './components/footer'
import './App.css';
import './components/scripts/formatter'

const App = () => {
  return (
    <>
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