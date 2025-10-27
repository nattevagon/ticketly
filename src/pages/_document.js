import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="light">
      <Head />
      <body className="antialiased bg-fourth-white dark:bg-primary-black overflow-hidden h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
