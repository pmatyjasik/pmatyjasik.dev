import RootLayout from 'layouts/RootLayout';
import 'styles/globals.css';
import type {AppProps} from 'next/app';
import {Poppins} from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const App = ({Component, pageProps}: AppProps) => (
  <main className={`${poppins.variable}`}>
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  </main>
);

export default App;
