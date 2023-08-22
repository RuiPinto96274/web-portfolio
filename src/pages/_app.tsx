import type { AppProps } from "next/app";
import { AppContainer, BasicStyles } from "../styles/basicStyles";
import { ThemeProvider } from "styled-components";
import Theme from "../styles/theme";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import NavTop from "../components/navbar";

const InnerApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <AppContainer>
      <NavTop />
      <Component {...pageProps} />
      {/*<Footer />*/}
    </AppContainer>
  );
};

const App = (props: AppProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <InnerApp {...props} />
      <BasicStyles />
    </ThemeProvider>
  );
};

export default appWithTranslation(App);
