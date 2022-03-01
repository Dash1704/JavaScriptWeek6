const { isTemplateElement } = require("babel-types");

const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
];

// function to check prefix

const checkPrefix = (chocolate, letter) => {
  return chocolate.toLowerCase().startsWith(letter.toLowerCase());
}

// function to check price
const checkPrice = (chocolatePrice, maxPrice) => {
  return chocolatePrice < maxPrice;
} 
console.log(checkPrice(1.99, 2));

// function to filter above from array.

const searchCandies = (prefix, maxPrice) => {
 

  return candies.filter(checkPrefix(prefix));
}

// module.exports = searchCandies;