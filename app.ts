console.log('Operational.');

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  let result = n1 + n2;
  if (showResult) {
    console.log(phrase + result); // this will output a concatenated string
  } else {
    return n1 + n2;
  }
};

const number1 = 5;
const number2 = 15;
const printResult = true;
const resultPhrase = 'Result: ';

add(number1, number2, printResult, resultPhrase);