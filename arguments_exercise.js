function sum() {
  let total = 0;
  let args = Array.from(arguments);
  args.forEach(function (el) {
    total += el;
  });
  return total;
}

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

Function.prototype.myBind = function (context) {
  let bindArgs = Array.from(arguments);
  const that = this;
  return function () {
    let callArgs = Array.from(arguments);
    that.apply(context, bindArgs);
  };
};

// markov.says("meow", "Ned");

markov.says.myBind(pavlov, "meow", "Kush")();
