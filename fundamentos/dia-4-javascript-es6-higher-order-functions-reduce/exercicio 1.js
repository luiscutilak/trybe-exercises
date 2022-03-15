const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
  return arrays.reduce((acc, value) => [...acc, ...value], []);
  // acc é o valor anterior acumulado, e value é o valor atual, ...(tres pontos é o método spread onde ele preserva o array o original e copia um novo array de acordo com o reduce)
  }
