// import functions and grab DOM elements
const entry = document.getElementById('entry')
const guessButton = document.getElementById('submitEntry')
const reload = document.getElementById('tryAgain')
const guessCounter = document.getElementById('guessCount')
const resultText = document.getElementById('userMessage')

// initialize global state
let numbGuess = 4;
const randomNumber = Math.floor(Math.random()* 20) + 1;



// set event listeners 
guessButton.addEventListener('click', () => {
  const userGuess = Number(entry.value);
  numbGuess--;
  if (userGuess < randomNumber) {
    resultText.textContent = 'too low';
  } else if(userGuess > randomNumber){
    resultText.textContent = 'too high';
  } else if (userGuess === randomNumber) {
    resultText.textContent = ' Congrats You Did it!';
  }



  
  
  let userMessage;
  if(userGuess === randomNumber){
    userMessage = 'Great Job'
  }else if (userGuess === 0){
    'No More Guesses';
    guessButton.style.display = 'none';
  }else if (userGuess > randomNumber){
    userMessage = 'number is too High';
  }else if (userGuess < randomNumber);{
    userMessage = 'number is too low';
  }
  
})




  // get user input
  // use user input to update state 
  // update DOM to reflect the new state



 
    


