import type { AppProps } from "next/app";
import "styles/global.css";

import Layout from "layouts/Layout";
import useWindowSize from "hooks/useWindowSize";

export default function App({ Component, pageProps }: AppProps) {
  useWindowSize();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
