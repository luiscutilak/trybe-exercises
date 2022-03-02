// function testingScope(escopo) { //* SEM ARROW FUNCTION
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true); =====================================================================================================
// const testingScope = (escopo) => { //* COM ARROW FUNCTION
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
    
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }  
//   var elseScope = 'Não devo ser utilizada fora meu escopo (else)';

//   testingScope(true);
//* +++++++++++++++++++++++++++++++++++++++ Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
{/* Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números. */}

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const crescentItems = oddsAndEvens.sort(function(a, b){return a-b})   //*USANDO MÉTODO SORT().
// console.log(`Os números ${crescentItems} se encontram ordenados de forma crescente`); 

// const sortOrder = (a, b) => { //* USANDO MÉTODO CONVENCIONAL.
//    oddsAndEvens[0] = 2;
//    oddsAndEvens[1] = 3;
//    oddsAndEvens[2] = 4;
//    oddsAndEvens[3] = 7;
//    oddsAndEvens[4] = 10;
//    oddsAndEvens[5] = 13;

// return crescentItems;   
// }
// const sortedArray = sortOrder();
// console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
// //* ==========================================================================================================================
// //Função, recebe um numero

// const factorial = (n) => n >= 2 ? n * factorial (n -1) : 1;
// console.log(factorial(-1));

// const factorialNumber = (n) => {
//    if (n === 0) {
//       return 1;
//    }
//    else 
//       return  (n >= 2, n * factorialNumber (n-1));
// }
// console.log(factorialNumber(9));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const longestWord = (str) => {
let wordArray = str.split(' '); // no caso aspas com espaços quer dizer que quero elas(as strings, separadas)
let maxLength = 0; // CONTADOR PARA PERCORRER O ARRAY DE PALAVRAS
let result = ' ';

for (const word of wordArray) { 

   if (word.length > maxLength) { // SE O COMPRIMENTO DESSA PALAVRA ENCONTRADA FOR MAIOR QUE ESSA PALAVRA ENCONTRADA
     maxLength = word.length; // O COMPRIMENTO MAXIMO SERA O COMPRIMENTO DESSA PALAVRA.
      result =  word;
   } 
 }
 return result;
}
// longestWord em uma linha ;) 

const longestWord = (str) => str.split(' ').sort((wordA, wordB) => wordB.length - wordA.length) [0]; // O método split traz para nós, todas as palavras(palavra por palavra em string) Depois o método .sort() chama o argumento da função e faz uma comparação no caso =>(a-b) e depois [0] para trazer a string solicitada 
