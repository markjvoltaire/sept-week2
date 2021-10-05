// import functions and grab DOM elements

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state



  const button = document.getElementById('guessButton')
const inputResults = document.getElementById('results')
const entry = document.getElementById('results')
const guessCount = document.getElementById('')

const randomNumber = () => {
    return Math.ceil(Math.random() *20 )
}

let guessesLeft = 4;

button.addEventListener('click', ()=>{
   const guess = Number(entry.value);
   guessesLeft-- ;
   let inputMessage;
   if(guess === randomNumber){
       inputMessage = 'You Win'
   } else if (guessesLeft === 0) {
     inputMessage = 'Sorry Try Again';
     button.style.display = 'none';

   }

    
})

