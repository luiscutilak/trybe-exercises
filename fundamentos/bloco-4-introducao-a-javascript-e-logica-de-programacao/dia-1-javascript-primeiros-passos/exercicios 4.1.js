//  1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// a) Adição (a + b)
// const a = 10;
// const b = 5;
// console.log(a+b);
// b) Subtração (a - b)
// const a = 10;
// const b = 5;
// console.log(a-b);
// c) Multiplicação (a * b)
// const a = 10;
// const b = 5;
// console.log(a*b);
// d) Divisão (a / b)

// const a = 10;
// const b = 5;
// console.log(a / b);

//    Módulo (a % b)

// const a = 10;
// const b = 5;
// console.log(10%2);
// **********************************************************************************************
// 2.Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

// const x = 10;
// const y = 50;
// let result = 0;
// if (x > y) {
//     console.log(x);
// }
//   else console.log(y); 

// //3.Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

// const x = 10;
// const y = 50;
// const z = 2;

// if (x > y && x > z) {
//     console.log(x);       

//   }  
//     else if (y > x && y > z) {
//     console.log(y);
//     } 
    
//      else { 
//     console.log(z);
// }

//4.Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

// const num = 0;

// if (num > 0) {
//     console.log("positive");
// }
//   else if (num < 0) {
//         console.log("negative");
//     }
//         else console.log("zero");


// }

//5.Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// const a = 60 
// const b = 60
// const c = 60

// if (a + b + c == 180 ){
//     console.log(true);
//  } else  {
//       console.log(false)
// }     if (a, b, c !== 60) {
//         console.log("Error invalid triangle side")
// } 
        
// 6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
const chess = () => ("horse").toLowerCase();
    if (chess != "bishop") {
        console.log("diagonals")
    }
      else 
        console.log("Error");

//  Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)
