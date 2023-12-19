import React, { useEffect } from 'react'

import LeftTextArea from '../leftTextArea';
import RightTextArea from '../rightTextArea';
import ConverterBtnContainer from '../converterBtnContainer'
import codeConverter from '../scripts/converter';

const ConverterHome = () => {

  useEffect(() => {
    codeConverter();
  });

  return (
    <>
            <div className='container'>
                <LeftTextArea placeholderValue="Paste your JSON/XML code here ... "/>
                <ConverterBtnContainer/>
                <RightTextArea placeholderValue="Your JSON/XML code will appear here ..."/>
            </div>
        </>
  )
}

export default ConverterHome