const checkLength = (str) => {
    
    if (str.length < 11) {
      return true;
    }

}
const filterLongNumbers = (arr) => {
    return arr.filter(checkLength);

}
console.log(checkLength('1234567'));

const numbers = [
    '1763687364',
    '4763687363',
    '7867867862',
    'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
  ];
console.log(filterLongNumbers(numbers))

