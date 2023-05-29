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

};

//collect the no of lines they wanna bet
const getNumberOfLines = () => {

    while(true){
    const lines = prompt("Enter the number of lines you want to bet(1-3): ")
    const numberOfLines = parseFloat(lines);

        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Invalid number of lines, try again.");
        }
        else{
            return numberOfLines;
        }
    }

};

//collect the bet amount from user
const getBet = (balance) => {
    
    while(true){
        const bet = prompt("Enter the bet per line: ")
        const numberBet = parseFloat(bet);
    
            if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance/lines){
                console.log("Invalid bet, try again.");
            }
            else{
                return numberBet;
            }
        }

};



let balance = deposit(); 
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
