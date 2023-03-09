import { Component } from "react";
import "@/styles/app.scss";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
