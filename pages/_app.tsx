import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import { metadata } from "../constants/Metadata";

function Links({ Component, pageProps }: AppProps) {
  return (
    <span>
      <NextSeo {...metadata}  />
      <Component {...pageProps} />
    </span>
  );
}

export default Links;
