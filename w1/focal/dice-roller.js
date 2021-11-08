const diceRolling = function(num) {
  const results = [];
  const max = 7;
  let initial = 0;
  while (num > initial) {
    let roll = Math.floor(Math.random() * max);
    if (roll > 0) {
      results.push(roll);
      initial++;
    }
  } return `Rolled ${num} dice: ${results.join(", ")}`;
};

console.log(diceRolling(6));
