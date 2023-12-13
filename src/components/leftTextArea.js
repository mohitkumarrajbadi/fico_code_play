import React from 'react'

const LeftTextArea = () => {
  return (
    <textarea
    className="large-area large-area--input"
    name="leftTextArea"
    id="leftTextArea"
    cols="30"
    rows="10"
    placeholder="Enter your JSON ...."
    defaultValue={JSON.stringify({ name: "mohit" })}
  ></textarea>  
  )
}

export default LeftTextArea