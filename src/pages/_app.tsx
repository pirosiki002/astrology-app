import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css"; // もしこれがある場合

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Google FontsからLobsterフォントをインポート */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        />
        {/* レスポンシブデザインのためのメタタグ */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
