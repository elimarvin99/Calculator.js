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
        result: newResult 
    };
    //push this new object to our array
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add()
{
    const enteredNumber = getUserInput();
    const initialResult = currentResult; //this way we store the previous calc b4 it gets changed
    //+ + also converts string to number
    currentResult += enteredNumber //using global values as parameters so function affects the whole code that we don't have to pass in parameters
    createAndWriteOutput('+', initialResult, enteredNumber)
    //part of our function, that way it is displayed each time we make a calculation ("eventlistener")
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract()
{
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber; 
    createAndWriteOutput('-', initialResult, enteredNumber)
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply()
{
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber; 
    createAndWriteOutput('*', initialResult, enteredNumber)
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide()
{
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber; 
    createAndWriteOutput('/', initialResult, enteredNumber)
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add); //we only pass in the function name, that way it's called only when clicked. address to function. 
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);


