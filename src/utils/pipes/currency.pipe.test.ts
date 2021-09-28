import { currencyPipe } from './currency.pipe';

describe('OrderService', () => {
  it('should return BRL format', () => {
    expect.assertions(2);
    expect(currencyPipe(49.99)).toBe('R$ 49,99');
    expect(currencyPipe(5000)).toBe('R$ 5000,00');
  });
});
