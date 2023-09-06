import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css'; // もしこれがある場合

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Google FontsからLobsterフォントをインポート */}
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
