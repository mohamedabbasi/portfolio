import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <title>Mohamed Abbasi</title>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 