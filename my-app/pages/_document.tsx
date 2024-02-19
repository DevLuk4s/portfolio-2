import { Html, Head, Main, NextScript } from "next/document";
import Sidebar from "./components/Sidebar";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body className="grid grid-cols-app min-h-screen bg-neutral-950">
        <Sidebar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
