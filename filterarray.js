const checkLength = (str) => {
    return str.length <= 10;
    }

const filterLongNumbers = (arr) => {
    return arr.filter(checkLength);

}

const numbers = [
    '1763687364',
    '4763687363',
    '7867867862',
    'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
  ];
console.log(filterLongNumbers(numbers))

