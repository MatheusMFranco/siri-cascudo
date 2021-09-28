import { Order } from '../../models/order.model';

function Order(data: Order) {
  return <h1>{data.name}</h1>;
}

export default Order;
