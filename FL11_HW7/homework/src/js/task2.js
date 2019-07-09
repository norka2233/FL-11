let gameData = {
  maxNumber: 8,
  attempt: 3,
  maxPrize: 100,
  currentPrize : 100,
  totalPrize: 0
}
const half = 2;

let start = confirm('Do you want to play a game?');
if (start) {
  while (gameData.attempt >= 1) {
    let randomNumber = Math.floor(Math.random() * (gameData.maxNunber + 1));
    let userNumber = prompt(
`Choose a roulette pocket number from 0 to  ${gameData.maxNumber}
Attempts left: ${gameData.attempt}
Total prize : ${gameData.totalPrize}
Possible prize on current attempt: ${gameData.currentPrize}$`);
    if (!userNumber) {
      alert('You did not become a millionaire, but can.');
      break;
    }
    if (parseFloat(userNumber) === randomNumber) {
      gameData.totalPrize += gameData.currentPrize;
      gameData.attempt = 3;
      gameData.currentPrize *= 2;
      gameData.maxNumber += 4;
      alert(`Congratulation, you won!   Your prize is: ${gameData.totalPrize} $.`);
      let continueGame = confirm('Do you want to continue?');
      if (continueGame) {
        gameData.maxPrize *= 2;
        gameData.currentPrize = gameData.maxPrize;
      } else {
        alert(`Thank you for your participation. Your prize is: ${gameData.totalPrize} $`);
        let startAgain = confirm('Do you want to continue one more time?')
        if (startAgain) {
          gameData.totalPrize = 0;
          gameData.attempt = 3;
          gameData.currentPrize = 100;
          gameData.maxPrize = 100;
          gameData.maxNumber = 8;
        }
      }
    } else {
      gameData.attempt--;
      gameData.currentPrize = Math.floor(gameData.currentPrize / half);
      if (gameData.attempt === 0) {
        alert(`Thank you for a game. Your prize is: ${gameData.totalPrize}`);
        let startAgain = confirm('Would you like to try one more time?');
        if (startAgain) {
          gameData.totalPrize = 0;
          gameData.currentPrize = 100;
          gameData.maxPrize = 100;
          gameData.maxNumber = 8;
          gameData.attempt = 3;
        }
      }
    }
  }
} else {
	alert('You did not become a millionaire, but can.');
}
