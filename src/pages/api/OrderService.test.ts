import { find } from './OrderService';
import mock from './OrderService.mock';

describe('OrderService', () => {
  const axios = { get: { mockImplementationOnce: jest.fn() } };

  it('should return success', async () => {
    expect.assertions(1);
    axios.get.mockImplementationOnce(() => Promise.resolve(mock.data));
    await expect(find()).resolves.toEqual(mock.data);
  });
});
