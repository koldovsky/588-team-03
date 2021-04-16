function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  const totalGoals = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return totalGoals;
}

//завдання 1

function move(position, roll) {
  const newPosition = position + roll * 2;;
  return newPosition;
}

//завдання 2

  
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

//завдання 3

  
function litres(time) {
  return Math.floor(time / 2);
}

//завдання 4

  
function mango(quantity, price) {
  const freeMangos = Math.floor(quantity / 3);
  return (quantity - freeMangos) * price;
}

//завдання 5
