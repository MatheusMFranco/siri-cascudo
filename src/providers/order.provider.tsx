import { createContext, Dispatch, SetStateAction, useState } from 'react';

export const OrderContext = createContext(null);

export const OrderProvider = (props: { children: React.ReactNode }) => {
  const [dishes, setDishes] = useState([]);

  return (
    <OrderContext.Provider value={{ dishes, setDishes }}>
      {props.children}
    </OrderContext.Provider>
  );
};
