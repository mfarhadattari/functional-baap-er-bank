function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId) ;
    const inputFieldValueString = inputField.value ;
    const inputFieldValue = parseFloat(inputFieldValueString) ;
    inputField.value = '' ;
    return inputFieldValue ;
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId) ;
    const elementValueString = element.innerText ;
    const elementValue = parseFloat(elementValueString) ;
    return elementValue ;
} 

function setTextElementById(elementId , setElementValue){
    const element = document.getElementById(elementId) ;
    element.innerText = setElementValue ;
}