import type { AppProps } from "next/app";
import { AppContainer, BasicStyles } from "../styles/basicStyles";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ThemeProvider } from "styled-components";
import Theme from "../styles/theme";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

const InnerApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <AppContainer>
      {/*<Navbar />*/}
      <Component {...pageProps} />
      {/*<Footer />*/}
    </AppContainer>
  );
};

const App = (props: AppProps) => {
  const { pageProps } = props;

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ fontFamily: "Outfit" }}
    >
      <Notifications position="top-center" />
      <ThemeProvider theme={Theme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <InnerApp {...props} />
        <BasicStyles />
      </ThemeProvider>
    </MantineProvider>
  );
};

export default appWithTranslation(App);
