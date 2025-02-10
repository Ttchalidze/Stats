/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  // TODO
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  return numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  // TODO
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let numberssum = 0;
  for (let i = 0; i < numbers.length; i++) {
    numberssum += numbers[i];
  }
  return numberssum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  // TODO
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  // TODO
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let numbersmin = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbersmin) {
      numbersmin = numbers[i];
    }
  }
  return numbersmin;
}

/** output in console (1) */

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  // TODO
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let numbersmax = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbersmax) {
      numbersmax = numbers[i];
    }
  }
  return numbersmax;
}
/** ouput in console 8 */
/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  // TODO
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const max = getMax(numbers);
  const min = getMin(numbers);
  return max - min;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  // TODO
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  return (numberseven = numbers.filter((number) => number % 2 === 0));
}
/** ouput in console */
/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  // TODO
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  return (numbersodd = numbers.filter((number) => number % 2 !== 0));
}
/** output in console (1,3,5,9) */
// === READ BUT DO NOT EDIT THE CODE BELOW ===

/**
 * @param {string} commaSeparatedNumbers
 * @returns {number[]} the string converted into an array of numbers
 */
function convertStringToNumbers(commaSeparatedNumbers) {
  // Split the string of numbers into an array of strings.
  const strings = commaSeparatedNumbers.split(",");

  // Convert the array of strings into an array of numbers
  const numbers = [];
  for (const s of strings) {
    const number = parseInt(s);
    numbers.push(number);
  }
  return numbers;
}

/**
 * Prints some descriptive statistics about the provided numbers.
 * @param {number[]} numbers
 */
function describeNumbers(numbers) {
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
}

const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);
const numbers = convertStringToNumbers(userInputString);
describeNumbers(numbers);
