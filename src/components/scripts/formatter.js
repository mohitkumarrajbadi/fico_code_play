// formatter.js
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

const codeFormatter = function () {
    const inputArea = document.querySelector(".large-area--input");
    const outputArea = document.querySelector(".large-area--output");
    const btnFormatJSON = document.querySelector(".controls__button--format");
    const btnFormatXML = document.querySelector(".controls__button--minify");

    btnFormatJSON.addEventListener("click", () => {

        if (checkFormat(inputArea.value) === 'json') {
            const formattedJSON = JSON.stringify(JSON.parse(inputArea.value), null, 4);
            outputArea.value = formattedJSON;
        }
    });
 
    btnFormatXML.addEventListener("click", () => {
        if (checkFormat(inputArea.value) === 'xml') {
            console.log('click')
            const formattedXML = xmlFormatter(inputArea.value,{indentation: '  ', 
            filter: (node) => node.type !== 'Comment', 
            collapseContent: true, 
            lineSeparator: '\n'});
            outputArea.value = formattedXML;
        }
    });


};

export default codeFormatter;
