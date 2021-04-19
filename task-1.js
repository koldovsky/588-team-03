function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  const totalGoals = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return totalGoals;
}

//завдання 1 https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

function move(position, roll) {
  const newPosition = position + roll * 2;;
  return newPosition;
}

//завдання 2 https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

  
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

//завдання 3 https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

  
function litres(time) {
  return Math.floor(time / 2);
}

//завдання 4 https://www.codewars.com/kata/keep-hydrated-1/train/javascript

  
function mango(quantity, price) {
  const freeMangos = Math.floor(quantity / 3);
  return (quantity - freeMangos) * price;
}

//завдання 5 https://www.codewars.com/kata/57a77726bb9944d000000b06
