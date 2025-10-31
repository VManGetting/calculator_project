//variables
let firstInputNumber = 0;  //first input
let secondInputNumber = 0; //second input
let operationSelected; //operation selected
let calculationOperation = [];  //collects the inputs for the calculations
let calculationDisplay = [];
let returnResult = 0; //result of the calculations


//input number function
//this pulls the numbers button into variable selectedButton
const selectedButton = document.querySelectorAll(".numbers_button");
console.log("NumberButton pulled in:" + selectedButton.length);

//clicking each button selects the number
selectedButton.forEach(eachButton => {eachButton.addEventListener("click", ()=> {
    //console.log(`number selected is ${eachButton.textContent}`);
    //console.log("inner text: " + eachButton.innerText);
    calculationOperation += eachButton.innerText;
    calculationDisplay += eachButton.innerText + " ";
    console.log(calculationOperation);

    //displaying to the input field
    const inputBoxInfo = document.getElementById("userInput");
    inputBoxInfo.value = calculationDisplay;
    console.log("Total current Operation: " + calculationOperation);

})});


//calculation - function
const operationsButton = document.querySelectorAll(".operation_button");
console.log("OperationButton pulled in:" + operationsButton.length);

//clicking each button selects the operation
operationsButton.forEach(operateButton => {operateButton.addEventListener("click", ()=> {
    //console.log(`operation selected is ${operateButton.textContent}`);
    calculationOperation += operateButton.innerText;
    calculationDisplay += operateButton.innerText + " ";

    //displaying to the input field
    const inputBoxInfo = document.getElementById("userInput");
    inputBoxInfo.value = calculationDisplay;
    console.log("Total current Operation: " + calculationOperation);
})});

const latestOperation = calculationOperation;
//when equal is pressed
function operate() {

    const latestOperation = calculationOperation;
    

    console.log("in operate() : " + latestOperation);

    const firstNumber = latestOperation[0];
    console.log("in operate() firstNumber: " + firstNumber);

    const secondNumber = latestOperation[2];
    console.log("in operate() secondNumber: " + secondNumber);

    const selectedOperation = latestOperation[1];
    console.log("in operate() operation: "+ selectedOperation);

    console.log("Operation will commence...");
    
}