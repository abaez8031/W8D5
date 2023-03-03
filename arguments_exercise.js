// function sum() {
//   let total = 0;
//   let args = Array.from(arguments);
//   args.forEach(function (el) {
//     total += el;
//   });
//   return total;
// }

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// Function.prototype.myBind = function (context) {
//   let bindArgs = Array.from(arguments);
//   const that = this;
//   return function () {
//     let callArgs = Array.from(arguments);
//     that.apply(context, bindArgs.concat(callArgs).slice(1));
//   };
// };


Function.prototype.myBind = function (context, ...bindArgs) {
    const that = this;
    return function (...callArgs) {
      that.apply(context, bindArgs.concat(callArgs));
    };
  };
  
  markov.says("meow", "Ned");
  
  markov.says.myBind(pavlov, "meow", "Kush")();
  
  const notMarkovSays = markov.says.myBind(pavlov);
  notMarkovSays("meow", "me")
  
  


// Curried Sum

function curriedSum(numArgs) {
    while (numArgs > 0){
    let total = [];
    let sumsum = 0;
    return function mySum(input) {
        console.log(total);
        total.push(input);
    }
    total.forEach(function (el) {sumsum += el} ) };
    return sumsum;
}


const sum = curriedSum(4);
sum(5)(30)(20)(1); // => 56