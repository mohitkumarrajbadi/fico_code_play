// formatter.js
import globalVal from './globalVariables';

const xmlFormatter = require('xml-formatter');

function checkFormat(value) {
    try {
        JSON.parse(value);
        return 'json';
    } catch (jsonError) {
        try {
            // Try parsing as XML
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(value, 'application/xml');
            const errors = xmlDoc.getElementsByTagName('parsererror');
            if (errors.length === 0) {
                return 'xml';
            }
        } catch (xmlError) {
            // Not JSON or XML
        }
    }
    return 'unkown';
}

const codeViewer = function () {
    const inputArea = document.querySelector(".large-area--input");
    const btnFormatJSON = document.querySelector(".controls__button--JSONView");
    btnFormatJSON.addEventListener("click", () => {
        debugger;
        if (checkFormat(inputArea.value) === 'json') {
            const formattedJSON = JSON.parse(inputArea.value);
            globalVal.value = formattedJSON;
        }
    });
 


};

export default codeViewer;
