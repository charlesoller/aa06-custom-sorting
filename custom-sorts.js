function ageSort(users) {
  // Your code here

  return users.sort((a, b) => a.age - b.age);
}

// function compareNumbers(a, b) {
//   return a - b;
// }

function oddEvenSort(arr) {
  return arr.sort((a,b) => {
    let isAEven = a % 2 === 0;
    let isBEven = b % 2 === 0;

    if(isAEven && !isBEven) return 1; //positive value means that b is sorted ahead of a
    if(!isAEven && isBEven) return -1; //negative value means that a stays to the left of b
    return a - b;
  })
}

function validAnagrams(s, t) {
  t = t.split('').sort().join('')
  s = s.split('').sort().join('')
  return t === s;
}

function reverseBaseSort(arr) {
  // Your code here
}

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
