import * as Styled from './styles';
import { Order } from '../../models/order.model';
import { currencyPipe } from '../../utils/pipes/currency.pipe';
import { createMachine, interpret } from 'xstate';
import { useState } from 'react';
import { useSelection } from '../../utils/hooks/useSelection/useSelection';

export const Card = ({ name, description, price, id }: Order) => {
  const toggleMachine = createMachine({
    id: 'toggle',
    initial: 'inactive',
    states: {
      inactive: { on: { TOGGLE: 'active' } },
      active: { on: { TOGGLE: 'inactive' } },
    },
  });
  const toggleService = interpret(toggleMachine).start();
  const [active, setActive] = useState(false);
  const [dishes, setDishes] = useSelection();

  const activateCard = (card: number) => {
    toggleService.send('TOGGLE');
    setActive('active' === toggleService.getSnapshot().value);
    dishes.push({ id: card, amount: 1 });
    setDishes(dishes);
  };

  return (
    <Styled.Container>
      <a
        className={(active ? 'active' : 'inactive') + ' card__wrapper'}
        type="button"
        onClick={() => activateCard(id)}
      >
        <div className="card__info">
          <div className="card__content">
            <h3 className="card__title">{name}</h3>
            <span className="card__description">{description}</span>
          </div>
          <span className="card__price">{currencyPipe(price)}</span>
        </div>
        <img className="card__image" src="https://baconmockup.com/120/120" />
      </a>
    </Styled.Container>
  );
};
