import { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { Order } from '../models/order.model';
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
      {!loading && (
        <div>
          {list.map((item: Order) => (
            <Card {...item} key={item.id} />
          ))}
        </div>
      )}
      {loading && <p>Loading...</p>}
    </section>
  );
}
