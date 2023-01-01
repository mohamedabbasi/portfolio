import Theme from "../styles/Theme";

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
