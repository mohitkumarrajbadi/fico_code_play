const inputArea = document.querySelector(".large-area--input");
const outputArea = document.querySelector(".large-area--output");
const btnFormat = document.querySelector(".controls__button--format");
const btnMinify = document.querySelector(".controls__button--minify");


btnFormat.addEventListener("click",()=>{
    debugger;
    const formattedJSON = JSON.stringify(JSON.parse(inputArea.value),null,4)
    
    outputArea.value = formattedJSON;
});