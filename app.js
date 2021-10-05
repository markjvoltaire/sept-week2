// import functions and grab DOM elements
const entry = document.getElementById('entry')
const guessButton = document.getElementById('submitEntry')
const reload = document.getElementById('tryAgain')
const guessCounter = document.getElementById('guessCount')
const resultText = document.getElementById('results')

// initialize global state
let numbGuess = 4;
const randomNumber = Math.floor(Math.random()* 20) + 1;


// set event listeners 
guessButton.addEventListener('click', () => {
  const userGuess = Number(entry.value);
  console.log(Number(entry.value));
})




  // get user input
  // use user input to update state 
  // update DOM to reflect the new state



 
    


