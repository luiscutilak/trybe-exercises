import generateRandomNumber from './service.js';
jest.mock('./service', () => {

return {
  __esModule: true,
  default: jest.fn(),
};
});
describe('generateRandomNumber', () => {
  it('deve ser chamada n vezes', () => {
    // checa se mock retorna o valor da funcao para 10
    generateRandomNumber.mockReturnValue(10); 
    // chame a função 10 vezes
    for (let i = 0; i < 10; i++) {
      generateRandomNumber();
    }
    // validar se a função foi realmente é chamada 10 vezes
    expect(generateRandomNumber).toHaveBeenCalled();
    expect(generateRandomNumber).toHaveBeenCalledTimes(10);
  });
});