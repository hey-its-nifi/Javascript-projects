//-------------------A simple JS program to create a slot machine------------------------
//Get user deposit
//Determine the no of lines to bet
//Collect a bet amount
//Spin the slot machine
//Check if user won
//Gift the user their winning
//Play again


const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}

const SYMBOL_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
}




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
const getBet = (balance, lines) => {
    
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

//spinning the slot machine
const spin = () => {
    const symbols = []; //used to store all the available elements from the symbol_count object we made above
    for(const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for(let i=0; i<count; i++){
            symbols.push(symbol);   //will give the output of all the symbols in an array ['A', 'A', 'B', ....likewise]
        }
    }

    const reels = [];
    for(let i=0; i<COLS; i++){
        reels.push([]);
        const reelSymbols = [...symbols]; //get a copy of the symbol array, coz when we get the symbol for first reel/row we must remove that symbol. We can't remove from original array
        for(let j=0; j<ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length); //math.random will generate a random num between 0 & 1 (a floating point num) and then we multiply by length and round the number down to nearest whole num
            const selectedSymbol = reelSymbols[randomIndex]; //store the variable with the value at the random index
            reels[i].push(selectedSymbol); //push that into the current reel
            reelSymbols.splice(randomIndex,1); //remove that value from the available symbols so that we dont select it again
        }
    }

    return reels;

};




let balance = deposit(); 
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
const reels = spin();
