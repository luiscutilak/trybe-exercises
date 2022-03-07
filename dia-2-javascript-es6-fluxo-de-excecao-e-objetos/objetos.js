//  *** TRATANDO ERROS, THROW , TRY / CATCH

// const sum = (value1, value2) => {
// //     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
// //       return 'Os valores devem ser numéricos';
// //     }
// //     return value1 + value2;
// //   };
  
// //   console.log(sum(2, 3));
// // // USANDO A FUNÇÃO THROW:
// // // const sum = (value1, value2) => {
// // //     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
// // //       throw new Error('Os valores devem ser numéricos');
// // //     }
// // //     return value1 + value2;
// // //   };
  
// // //   console.log(sum(2, 3));

// // const verifyIsNumber = (value1, value2) => {
// //     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
// //       throw new Error('Os valores devem ser numéricos');
// //     }
// //   };
  
// //   const sum = (value1, value2) => {
// //     try {
// //       verifyIsNumber(value1, value2);
// //       return value1 + value2;
// //     } catch (error) {
// //       throw error.message;
// //     }
// //   };
  
// //   console.log(sum(2, '3'));

// // *** OBJECTS ***

// // const customer = {
// //     firstName: 'Roberto',
// //     age: 22,
// //     job: 'Teacher',
// //   };

// //   customer.lastName = 'Faria'
// //   console.log(customer);

// // const customer = {
// //     firstName: 'Roberto',
// //     age: 22,
// //     job: 'Teacher',
// //   };
  
// //   let newKey = 'lastName';
// //   const lastName = 'Ferreira';
// //   customer[newKey] = lastName;
// //   newKey = 'fullName';
// //   const fullName = `${customer.firstName} ${customer.lastName}`;
// //   customer[newKey] = fullName;
// //   console.log(customer);

// // Método Object.keys como o próprio nome diz, é utilizado para listar as chaves de um objeto, retornando-as em um array *****************

// // const coolestTvShow = {
// //     name: "BoJack Horseman",
// //     genre: "adult animation",
// //     createdBy: "Raphael Bob-Waksberg",
// //     favoriteCharacter: "Princess Carolyn",
// //     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };
// console.log(Object.keys(coolestTvShow));

// const student1 = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkills: 'Ótimo',
//   };
  
//   const student2 = {
//     Html: 'Bom',
//     Css: 'Ótimo',
//     JavaScript: 'Ruim',
//     SoftSkills: 'Ótimo',
//     Git: 'Bom', // chave adicionada
//   };

//   const listSkills = (student) => {
//       const arrayOfSkills = Object.keys(student);
//       console.log(arrayOfSkills);
//       for (const index in arrayOfSkills) {
//         console.log((`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`));
        
//       } 
//   };

// console.log('Estudante 1');
// listSkills(student1);

// console.log('Estudante 2');
// listSkills(student2);

