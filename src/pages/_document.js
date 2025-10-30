import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="light">
      <Head />
      <body className="antialiased bg-fourth-white dark:bg-primary-black min-h-screen overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
