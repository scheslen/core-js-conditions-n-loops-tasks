/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) return a;
  if (b > a && b > c) return b;
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 *
 * @param {Position} queen - The position of the queen.
 * @param {Position} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) return true;
  if (queen.x === queen.y && king.x === king.y) return true;
  if (queen.x + queen.y === king.x + king.y) return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a >= b + c || b >= a + c || c >= a + b) return false;
  if (a === b || a === c || b === c) return true;
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const oConvert = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
  };
  let sResult = '';

  if (num < 10) return oConvert[num];
  if (num < 40) {
    sResult = num % 10 > 0 ? oConvert[num % 10] : '';
    for (let i = 0; i < Math.floor(num / 10); i += 1) {
      sResult = `X${sResult}`;
    }
  }

  return sResult;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(nStr) {
  const oConvert = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    '-': 'minus',
    '.': 'point',
    ',': 'point',
  };

  let sResult = '';

  for (let i = 0; i < nStr.length - 1; i += 1) {
    sResult += `${oConvert[nStr[i]]} `;
  }
  sResult += oConvert[nStr[nStr.length - 1]];

  return sResult;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i += 1) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let p = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      p = i;
      break;
    }
  }
  return p;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const sNum = String(num);
  for (let i = 0; i < sNum.length; i += 1) {
    if (sNum[i] === String(digit)) return true;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let Ind = -1;
  if (arr.length > 2) {
    for (let m = 1; m < arr.length - 1; m += 1) {
      let sum1 = 0;
      for (let i = 0; i < m; i += 1) sum1 += arr[i];
      let sum2 = 0;
      for (let i = m + 1; i < arr.length; i += 1) sum2 += arr[i];
      if (sum1 === sum2) {
        Ind = m;
        break;
      }
    }
  }
  return Ind;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const aRes = [];
  for (let i = 0; i < size; i += 1) aRes[i] = [];

  let i1 = 0;
  let i2 = size - 1;
  let j1 = 0;
  let j2 = size - 1;

  let k = 1;
  while (k <= size * size) {
    for (let j = j1; j <= j2; j += 1) {
      aRes[i1][j] = k;
      k += 1;
    }

    i1 += 1;
    for (let i = i1; i <= i2; i += 1) {
      aRes[i][j2] = k;
      k += 1;
    }

    j2 -= 1;
    for (let j = j2; j >= j1; j -= 1) {
      aRes[i2][j] = k;
      k += 1;
    }

    i2 -= 1;
    for (let i = i2; i >= i1; i -= 1) {
      aRes[i][j1] = k;
      k += 1;
    }

    j1 += 1;
  }

  return aRes;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const aRes = [];
  for (let i = 0; i < matrix.length; i += 1) aRes[i] = [];

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      aRes[j][matrix.length - 1 - i] = matrix[i][j];
    }
  }

  const aRes0 = matrix;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      aRes0[i][j] = aRes[i][j];
    }
  }

  return aRes0;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const aRes = arr;
  let iMin = 0;
  let val = 0;

  for (let k = 0; k < arr.length - 1; k += 1) {
    val = aRes[k];
    iMin = k;
    for (let i = k + 1; i < arr.length; i += 1) {
      if (aRes[i] < val) {
        iMin = i;
        val = aRes[i];
      }
    }

    val = aRes[k];
    aRes[k] = aRes[iMin];
    aRes[iMin] = val;
  }
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let sStr = str;
  let s1 = '';
  let s2 = '';

  for (let k = 0; k < iterations; k += 1) {
    s1 = '';
    s2 = '';
    for (let i = 0; i < str.length; i += 1) {
      if (i % 2 === 0) s1 += sStr[i];
      else s2 += sStr[i];
    }

    sStr = s1 + s2;
  }

  return sStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 */
function getNearestBigger(number) {
  const aNumber = number.toString().split('');
  let N = -1;
  let M = -1;
  let J = -1;

  for (let i = aNumber.length - 1; i > 0; i -= 1) {
    if (aNumber[i] > aNumber[i - 1]) {
      N = aNumber[i];
      M = aNumber[i - 1];
      aNumber[i - 1] = aNumber[i];
      aNumber[i] = M;
      J = i - 1;
      break;
    }
    if (M > -1) break;
  }
  if (M < 0 || N < 0) return number;

  for (let i = J + 1; i < aNumber.length; i += 1)
    for (let j = i + 1; j < aNumber.length; j += 1)
      if (aNumber[i] > aNumber[j]) {
        M = aNumber[j];
        aNumber[j] = aNumber[i];
        aNumber[i] = M;
      }

  return Number(aNumber.join(''));
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
