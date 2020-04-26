const str = "XXX";

const convertToArabicNumber = (RomaNum) => {
  switch (RomaNum) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
  }
};

const sumNums = (str) => {
  const numsArr = str.split("");
  const cos = numsArr.reduce((total, curValue, index, arr) => {
    let num = convertToArabicNumber(arr[index]);
    let nextNum = convertToArabicNumber(arr[index + 1]);

    if (num < nextNum) {
      num = -num;
    }
    return total + num;
  }, 0);

  console.log(cos);
};

/* drugie */
const lettersArrHoundred = new Map([[1,'C'],[5,'D'],[4,'CD'],[9,'CM']])
const lettersArrDecimal = new Map([[1,'X'],[5,'L'],[4,'XL'],[9,'XC']])
const lettersArrUnity = new Map([[1,'I'],[5,'V'],[4,'IV'],[9,'IX']])
const romanLetters = [ lettersArrUnity,lettersArrDecimal ,lettersArrHoundred]

const convertToRomanNums = (num,lettersArr) => {
    if(lettersArr.get(num)){
        return lettersArr.get(num);
    }
    return sumNums2(num, lettersArr);
}


const convertSmallNumbertoRome = (num,lettersArr) => {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str = str + lettersArr.get(1);
  }
  return str;
};

const sumNums2 = (num, lettersArr) => {
  if (num > 5) {
    return lettersArr.get(5) + convertSmallNumbertoRome( num - 5,lettersArr);
  } 
  return convertSmallNumbertoRome(num,lettersArr);
};

const sumRomans = (num) => {
  let romanNum = "";
  new String(num).split("").reverse().forEach((num, index) => {
    romanNum = convertToRomanNums(parseInt(num), romanLetters[index]) + romanNum;
  });
  console.log(romanNum);
};

sumRomans(7);
sumRomans(5);
sumRomans(3);
sumRomans(465);
// sumNums("MCXCII")
