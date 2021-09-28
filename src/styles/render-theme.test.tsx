import { screen } from '@testing-library/react';
import { renderTheme } from './render-theme';

describe('renderTheme', () => {
  it('should render', () => {
    renderTheme(<h1>Hello World!</h1>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
