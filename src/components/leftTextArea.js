import React from 'react'

const LeftTextArea = ({placeholderValue,defaultValue}) => {
  return (
    <textarea
    className="large-area large-area--input"
    name="leftTextArea"
    id="leftTextArea"
    cols="30"
    rows="10"
    placeholder={placeholderValue}
    defaultValue={defaultValue}
  ></textarea>  
  )
}

export default LeftTextArea