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
  
// console.log(mapOutput);


// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];


// CREATE A USER NAME FROM THE DATA PROVIDED

function createUsername(accs) {
  accs.forEach(function(acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(function(name) {
      return name[0];
    }).join('');
  })
}
createUsername(accounts);
console.log(accounts);