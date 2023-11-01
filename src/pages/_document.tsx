import {Html, Head, Main, NextScript} from 'next/document';

const Document = () => (
  <Html lang="en">
    <Head>
      <meta name="description" content="Hi, my name is Piotr Matyjasik. Welcome to my portfolio." />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Piotr Matyjasik" />
      <meta
        property="og:description"
        content="Hi, my name is Piotr Matyjasik. Welcome to my portfolio."
      />
      <meta property="og:image" content="/og-image.png" />
      <meta name="theme-color" content="#355FE5" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
