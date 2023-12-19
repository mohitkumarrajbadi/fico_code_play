import React from 'react'

const ButtonsContainer = () => {
    return (
        <div className="controls">
            <button className="controls__button controls__button--format">JSON</button>
            <button className="controls__button controls__button--minify">XML</button>
        </div>
    )
}

export default ButtonsContainer