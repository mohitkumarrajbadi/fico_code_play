import React, { useState, useEffect } from 'react';
import { JsonView, allExpanded, darkStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import LeftTextArea from '../leftTextArea';
import ViewerBtnContainer from '../converterBtnContainer';

const formattedJson = {
  a: 1,
  b: 'mohit'
};

const ViewerHome = () => {
  // const [formattedJson, setFormattedJson] = useState(globalVariables.value);

  // useEffect(() => {
  //   // Assuming formatJson modifies globalVariables.value
  //   // formatJson();
  //   codeViewer();
  //   setFormattedJson(globalVariables.value);
  // }, []);

  return (
    <div className='container'>
      <LeftTextArea placeholderValue="Paste your JSON/XML code here ... " defaultValue={JSON.stringify({ name: "mohit" })} />
      <ViewerBtnContainer />
      <React.Fragment>
        <JsonView data={formattedJson} shouldExpandNode={allExpanded} style={darkStyles} />
      </React.Fragment>
    </div>
  );
};

export default ViewerHome;
