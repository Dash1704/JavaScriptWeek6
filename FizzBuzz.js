// Return "Fizz" if this number is divisible by 3.
// Return "Buzz" if this number is divisible by 5.
// Return "FizzBuzz" if this number is divisible by both 5 and 3.
// Otherwise, Return the number itself.



function fizzBuzz(a) {
    if (a%3 === 0 && a%5 === 0) {
        return 'FizzBuzz';
    } else if (a%3 === 0){
        return 'Fizz';
    } else if (a%5 === 0){
        return 'Buzz';
    } else {
        return a;
    }
    }

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(8));

// function loop

let text = "";


for (let i = 1; i < 16; i++) {
    console.log(text = "Fizzbuzz result for " + i + " is " + fizzBuzz(i));
};

// for (let i = 1 ; i <= 50 ; i++) {
//     console.log(`Fizzbuzz result for ${i} is ${fizzBuzz(i)}`);
//   }


// 
