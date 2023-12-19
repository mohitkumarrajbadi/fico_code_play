const xml2js = require('xml2js');

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

const codeConverter = function(){
    const inputArea = document.querySelector(".large-area--input");
    const outputArea = document.querySelector(".large-area--output");
    const btnJson2XML = document.querySelector(".controls__button--JSON2XML");
    const btnXML2Json = document.querySelector(".controls__button--XML2JSON");

    
    btnJson2XML.addEventListener("click",() => {
        if(checkFormat(inputArea.value) === 'json'){
            const inputJsonObject = JSON.parse(inputArea.value);
            const builder = new xml2js.Builder();
            const xmlString = builder.buildObject(inputJsonObject);

            outputArea.value = xmlString;
        }
    });


    btnXML2Json.addEventListener("click",()=>{
        if(checkFormat(inputArea.value) === 'xml'){
            const xmlString = inputArea.value;
            xml2js.parseString(xmlString,{explicitArray: false, ignoreAttrs: true},(error,result)=>{
                debugger
                if(error){
                    outputArea.value = error
                }else{
                    outputArea.value = JSON.stringify(result,null,4)
                }
            });
        }
    });


}

export default codeConverter;