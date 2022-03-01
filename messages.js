// const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const generateMessages = (arr) => {
  return arr.map(item => {
    const name = item.name;
    const discount = item.discount;
    return `Hi ${name}! ${discount} % off our best candies for you today!`;
  });
}

console.log(generateMessages(namesAndDiscounts));


// const person = {
//   name: 'Maxine',
//   age: 32,
//   address: {
//     city: 'London',
//     postcode: 'E1 123'
//   },
//   hobbies: ['writing', 'tennis', 'cooking']
// };

// console.log(person.hobbies[1]);
