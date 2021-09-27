import axios from 'axios';
import env from '../../environments/env';

export const find = async () => {
  try {
    const response = await axios.get(`${env.apiUrl}/products`);
    return response.data;
  } catch (exception) {
    throw new Error('Não foi possível encontrar os dados.');
  }
};
