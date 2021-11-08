const args = process.argv;
const array = args.slice(2);
const total = function(inputs) {
  let sum = 0;
  for (let i = 0; i < inputs.length; i++) {
    sum += Number(inputs[i]);
  } return sum;
};


console.log(total(array));
