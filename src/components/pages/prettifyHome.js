import React, { useEffect } from 'react'
import LeftTextArea from '../leftTextArea';
import ButtonsContainer from '../buttonsContainer';
import RightTextArea from '../rightTextArea';
import codeFormatter from '../scripts/formatter'; 

const PrettifyHome = () => {

    useEffect(() => {
        codeFormatter();
      });

    return (
        <>
            <div className='container'>
                <LeftTextArea placeholderValue="Paste your JSON/XML code here ... " defaultValue={JSON.stringify({ name: "mohit" })}/>
                <ButtonsContainer/>
                <RightTextArea placeholderValue="Your JSON/XML code will appear here ..."/>
            </div>
        </>
    )
}

export default PrettifyHome