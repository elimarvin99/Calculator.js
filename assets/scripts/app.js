const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//functions
//this function gets user input and converts it to an integer
function getUserInput(){
return parseInt(userInput.value);
}
//this function logs and displays the calculations
function createAndWriteOutput(mathOperator, resultBeforeCalc, calcNumber)
{
    const calcDescription = `${resultBeforeCalc} ${mathOperator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog (operationType, prevResult, operationNumber, newResult)
{
    const logEntry = { //properties in objects have a name and a colon to assing value.
        operation: operationType,
        prevResult: prevResult,
        enteredNumber: operationNumber,
        newResult: newResult 
    };
    //push this new object to our array
    logEntries.push(logEntry);
    console.log(logEntries);
}
function calculateResult(calculationType)
{
    if (calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE') {
        return;
    }
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+'
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-'
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*'
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/'
    }
    
    createAndWriteOutput(mathOperator, initialResult, enteredNumber)
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add()
{
    calculateResult('ADD');
}

function subtract()
{
    calculateResult('SUBTRACT');
}

function multiply()
{
    calculateResult('MULTIPLY')
}

function divide()
{
    calculateResult('DIVIDE')
}

addBtn.addEventListener('click', add); //we only pass in the function name, that way it's called only when clicked. address to function. 
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);


