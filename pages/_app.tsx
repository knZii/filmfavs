import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import {useLocalStorage} from '@mantine/hooks'

export default function App(props: AppProps) {
  const [colorSchema, setColorSchema] = useLocalStorage<ColorScheme>({
    key: 'mantine-theme',
    defaultValue: 'dark',
    getInitialValueInEffect: true
  });
  const { Component, pageProps } = props;

  const toggleColorSchema = () => {
    setColorSchema(colorSchema == 'dark'?'light':'dark');
  }
  return (
    <>
      <Head>
        <title>Film Faves</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <ColorSchemeProvider colorScheme={colorSchema} toggleColorScheme={toggleColorSchema}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{colorScheme: colorSchema}}
      >
        <Component {...pageProps} />
      </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}