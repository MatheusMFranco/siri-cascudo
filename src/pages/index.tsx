import { useEffect, useState } from 'react';
import { Order } from '../model/order.model';
import * as service from './api/OrderService';

export default function Home() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => loadList(), []);

  function loadList() {
    service.find().then((dataList: Order[]) => {
      setList(dataList);
      setLoading(false);
    });
  }

  return (
    <section>
      {!loading && <p>{list[0].name}</p>}
      {loading && <p>Loading...</p>}
    </section>
  );
}
