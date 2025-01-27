// Iteration #1: Find the maximum
function maxOfTwoNumbers(x, y) {
  if (x === y) {
    return x, y;
  } else {
    return Math.max(x, y);
  }
}

// Iteration #2: Find longest word
function findLongestWord(arrNotSorted) {
  if (arrNotSorted.length === 0) return null;
  if (arrNotSorted.length === 1) return arrNotSorted[0];
  let indiceMaiorElemento = 0;
  for (let i = 0; i < arrNotSorted.length - 1; i++) {
    if (arrNotSorted[indiceMaiorElemento].length < arrNotSorted[i + 1].length) {
      indiceMaiorElemento = i + 1;
    }
    console.log(
      i,
      arrNotSorted[i].length,
      arrNotSorted[i + 1].length,
      indiceMaiorElemento
    );
  }
  return arrNotSorted[indiceMaiorElemento];
}
const words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
];
console.log(findLongestWord(words));

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayNumbers) {
  if (arrayNumbers.length === 0) return 0;
  if (arrayNumbers.length === 1) return arrayNumbers[0];
  let nonZeroArray = false;
  for (let elemento in arrayNumbers) {
    if (elemento != 0) nonZeroArray = true;
  }
  if (nonZeroArray) {
    return arrayNumbers.reduce(
      (acumulador, valorAtual) => acumulador + valorAtual,
      0
    );
  } else return 0;
}
console.log('****************');
// Iteration #3.1 Bonus:

// apenas testando a função erro
function sum(auxArr) {
  for (let i in auxArr)
    if (typeof auxArr[i] !== 'object') {
      console.log(auxArr[i]);
      throw new Error("Unsupported data type sir or ma'am");
    }
}
//sum([1, 2, 'jkflsa']);

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(aux) {
  if (aux.length === 0) return null;
  if (aux.length === 1) return aux[0];
  return sumNumbers(aux) / aux.length;
}

// Level 2: Array of strings
const wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];
// Bonus - Iteration #4.2
function averageWordLength(wordsArr) {
  if (wordsArr.length === 0) return null;
  const lengthArr = wordsArr.map((item) => item.length);
  return averageNumbers(lengthArr);
}

// Bonus - Iteration #4.1
function avg(aux) {}

// Iteration #5: Unique arrays ++++++++++++++++++
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring',
];

function uniquifyArray(original) {
  if (original.length === 0) return null;
  const unicos = [original[0]]; // primeiro é parte do conjunto, certeza
  for (let elemento in original) {
    if (unicos.includes(original[elemento])) {
      //nao faz nada
    } else {
      unicos.push(original[elemento]);
    }
  }
  return unicos;
}
console.log(uniquifyArray(wordsUnique));
// Iteration #6: Find elements
const wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience',
];

function doesWordExist(arOriginal, chave) {
  if (arOriginal.length === 0) return null;
  return arOriginal.includes(chave);
}

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter',
];

function howManyTimes(arrOriginal, chave) {
  let arrFiltrado;
  arrFiltrado = arrOriginal.filter((elemento) => elemento === chave);
  console.log(arrFiltrado);
  return arrFiltrado.length;
}
howManyTimes(wordsCount);

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];
console.log('=================================');
// usada na 8.2
function matrizShiftada(matrizInicial) {
  let aux = Array.from(matrizInicial);
  aux.map((cadaArr) => cadaArr.shift());
  aux.shift();
  return aux;
}
console.log('=================================');

function greatestProduct(numberArr) {
  let matriz = Array.from(numberArr);
  // mais facil fazer o shif das matrizes e depois multiplicar com indice igual
  // evitar fazer shifts m(i+1)*m(i+2).. durante as multiplicações
  //versões sem primeira linha/coluna
  let m2 = matrizShiftada(matriz); //sem a 1ª linha/coluna da fornecida
  let m3 = matrizShiftada(m2);
  let m4 = matrizShiftada(m3);
  //matriz das multiplicações
  let multipArr = [];
  //diagonal começa com oqual item da matriz principal
  let headDiagonal = [];

  for (i = 0; i < m4.length; i++) {
    for (j = 0; j < m4[0].length; j++) {
      multipArr.push(matriz[i][j] * m2[i][j] * m3[i][j] * m4[i][j]);
      headDiagonal.push([i, j]);
    }
  }
  console.log(multipArr);
  //agora o reverso tbm
  matriz = Array.from(numberArr).map((cadaArr) => cadaArr.reverse());
  //console.log(matriz);
  m2 = matrizShiftada(matriz);
  m3 = matrizShiftada(m2);
  m4 = matrizShiftada(m3);

  //m4[0].length, pois é multidimencional , mas quadrado(2d)x4 camadas

  for (i = 0; i < m4.length; i++) {
    for (j = 0; j < m4[0].length; j++) {
      multipArr.push(matriz[i][j] * m2[i][j] * m3[i][j] * m4[i][j]);
      headDiagonal.push([i, j]);
    }
  }
  //retorna o maximo do array de multiplicações
  let max = Math.max(multipArr.reduce((a, b) => Math.max(a, b)));
  console.log(max, '<-- maior');
  console.log(headDiagonal);
  console.log(multipArr.indexOf(max), '<-- ordem');
  console.log(headDiagonal[multipArr.indexOf(max)], '<--');
  return Math.max(multipArr.reduce((a, b) => Math.max(a, b)));
}
greatestProduct(matrix);
//-------------------fim--------------------
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct,
  };
}
