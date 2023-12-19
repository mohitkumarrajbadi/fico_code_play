import React from 'react'
import ViewerBtnContainer from './converterBtnContainer'

const ViewerBtnContainer = () => {
    return (
        <div className="controls">
            <button className="controls__button controls__button--JSON">JSON</button>
            <button className="controls__button controls__button--XML">XML</button>
        </div>
    )
}

export default ViewerBtnContainer