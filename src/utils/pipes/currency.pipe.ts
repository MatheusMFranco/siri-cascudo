export const currencyPipe = (money = 0): string => {
  const format = money.toFixed(2);
  const result = format.split('.');
  result[0] = result[0].replace(',', '.');
  return `R$ ${result.join(',')}`;
};
