import React from 'react'
import { JsonView, allExpanded, darkStyles, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

const json = {
  a: 1,
  b: 'example'
};

const RightTextArea = ({placeholderValue}) => {
  return (
    <textarea className="large-area large-area--output" name="rightTextArea" id="rightTextArea" cols="30" rows="10" placeholder={placeholderValue}></textarea>
  )
}

export default RightTextArea