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

// <!-- * PARTE II -->

 const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  return `Olá ${order.order.delivery.deliveryPerson} , entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, ${order.address.number}, AP: Nº ${order.address.apartment}`; 
 
}

console.log(customerInfo(order));

const orderModifier = (order) => {
const newBuyer = order.name = "Luis Cutilak";
const pizzas = Object.keys(order.order.pizza); // Nessa linha Object.keys acessa as PIZZAS porém no retorno da função devemos apontar o index das pizzas desejadas, pois elas estao em um array.
const drink = order.order.drinks.coke.type = "Fanta Uva";
const paymentSalesOff = order.order.payment = "50";
  return `Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drink}, é R$ ${paymentSalesOff},00`;
};
 console.log(orderModifier(order));

// EXERCICIO 3

 const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addLessons = (obj, key, value) => {
  
}  