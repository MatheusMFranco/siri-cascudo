import { Order } from '../../model/order';

function Order(data: Order) {
  return <h1>{data.name}</h1>;
}

export default Order;
