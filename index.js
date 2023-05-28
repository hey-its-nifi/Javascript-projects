//-------------------A simple JS program to create a slot machine------------------------
//Get user deposit
//Determine the no of lines to bet
//Collect a bet amount
//Spin the slot machine
//Check if user won
//Gift the user their winning
//Play again


const prompt = require("prompt-sync")();

//collect the deposit from user
const deposit = () => {

    while(true){
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

        if(isNaN(numberDepositAmount) || numberDepositAmount<=0){
            console.log("Invalid amount, try again.");
        }
        else{
            return numberDepositAmount;
        }
    }

}

//collect the no of line they wanna bet
const getNumberOfLines = () => {

    while(true){
    const lines = prompt("Enter the number of lines you want to bet: ")
    const numberOfLines = parseFloat(depositAmount);

        if(isNaN(numberOfLines) || numberOfLines<=0 || numberOfLines>3){
            console.log("Invalid number of lines, try again.");
        }
        else{
            return numberOfLines;
        }
    }

}

const depositAmount = deposit();
const numberOfLines = getNumberOfLines();