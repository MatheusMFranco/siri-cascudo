import { screen } from '@testing-library/react';

import { Card } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<Card />', () => {
  it('should render card info', () => {
    expect.assertions(3);
    const { container } = renderTheme(<Card {...mock} />);
    const title = container.querySelector('.card__title');
    const description = container.querySelector('.card__description');
    const price = container.querySelector('.card__price');
    expect(title.textContent).toBe(mock.name);
    expect(description.textContent).toBe(mock.description);
    expect(price.textContent).toBe(mock.price);
  });
});
