import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import { theme } from '../styles/theme';
import { OrderProvider } from '../providers/order.provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <OrderProvider>
        <Component {...pageProps} />
      </OrderProvider>
    </ThemeProvider>
  );
}

export default MyApp;
