// Task:
// Write a function that receives two sequences: A and B of integers and returns one sequence C.
//  Sequence C should contain all elements from sequence A (maintaining the order) except those,
// that are present in sequence B p times, where p is a prime number.

// Example:
// A=[2,3,9,2,5,1,3,7,10]
// B=[2,1,3,4,3,10,6,6,1,7,10,10,10]
// C=[2,9,2,5,7,10]

// 1. Sprawdzic czy liczba zawarta w tablicy A wsytepuje w tablicy B?
// 2. Sprawdzic ile razy element z A występuje w B?
// 3. Jeśli ilośc wystepowania != liczba pierwsza => A[i]=C[i];

const a = [2, 3, 9, 2, 5, 1, 3, 7, 10];
const b = [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10];

const checkIsPrime = (num) => {
  if (num < 2) {
    return false;
  } else {
    for(let i=2;i*i<=num;i++){
        if(num%i==0) return false  
    }
  }
  return true;
};


const compareArrays = (arrayA, arrayB) => {
  const arrayC = [];

  for (let i = 0; i < arrayA.length; i++) {
    let counter = 0;
    for (let j = 0; j < arrayB.length; j++) {
      if (arrayA[i] == arrayB[j]) {
        counter++;
      }
    }
    if (!checkIsPrime(counter)) {
      arrayC.push(arrayA[i]);
    }
  }
  console.log(arrayC);
};

compareArrays(a, b);
