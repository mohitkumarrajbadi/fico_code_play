import React, { useEffect } from 'react'
import LeftTextArea from '../leftTextArea';
import ButtonsContainer from '../buttonsContainer';
import RightTextArea from '../rightTextArea';
import jsonFormatter from '../scripts/formatter'; 

const JSONFormatHome = () => {

    useEffect(() => {
        jsonFormatter();
      });

    return (
        <>
            <div className='container'>
                <LeftTextArea/>
                <ButtonsContainer/>
                <RightTextArea />
            </div>
        </>
    )
}

export default JSONFormatHome