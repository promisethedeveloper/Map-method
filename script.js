const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const nairaToUsd = 450;

// Using regular anonymous function as the call back function
// const conversion = movements.map(function(mov) {
//   return nairaToUsd * mov;
// })
// console.log(conversion);
// console.log(movements)

// Using arrow function as the call back function
const conversion = movements.map(mov => nairaToUsd * mov);

// console.log(conversion);
// console.log(movements)

const mapOutput = movements.map(function(mov, index) {
  return `Movement ${index + 1}: You made a ${mov > 0 ? 'deposit' : 'withdrawal'} of ${Math.abs(mov)}`
});
  
console.log(mapOutput);
