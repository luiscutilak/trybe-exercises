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

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const crescentItems = oddsAndEvens.sort(function(a, b){return a-b})   //*USANDO MÉTODO SORT().
console.log(`Os números ${crescentItems} se encontram ordenados de forma crescente`); 

const sortOrder = (a, b) => { //* USANDO MÉTODO CONVENCIONAL.
   oddsAndEvens[0] = 2;
   oddsAndEvens[1] = 3;
   oddsAndEvens[2] = 4;
   oddsAndEvens[3] = 7;
   oddsAndEvens[4] = 10;
   oddsAndEvens[5] = 13;

return crescentItems;   
}
const sortedArray = sortOrder();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉