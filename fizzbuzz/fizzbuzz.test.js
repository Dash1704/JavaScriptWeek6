describe ('fizzBuzz', () => {
  it('returns fizzbuzz if number is divisible by 3 and by 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  });
  it('returns fizz if number is divisible by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
  });
  it('returns buzz if number is divisible by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
  });  
  it('returns the number if its not divisible by 3 or 5', () => {
    expect(fizzBuzz(4)).toBe(4)
  });
}); 


const fizzBuzz = require('./fizzbuzz')