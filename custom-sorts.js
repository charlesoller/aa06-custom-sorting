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
  return arr.sort((a,b) => {
    let aLength = String(a).length;
    let bLength = String(b).length;

    if(bLength > aLength) return 1;
    if(bLength < aLength) return -1;

    return a - b;
  })
}

function frequencySort(arr) {
  let numObj = {}

  for(let i = 0; i < arr.length; i++){
    if(!numObj[arr[i]]){
      numObj[arr[i]] = 1
    } else {
      numObj[arr[i]]++;
    }
  }

  // console.log(numObj)
  return arr.sort((a,b) => {
    let aFreq = numObj[a]
    let bFreq = numObj[b]

    if(aFreq > bFreq) return 1;
    if(aFreq < bFreq) return -1;

    return b - a;
  })
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
