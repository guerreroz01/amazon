import Head from "next/head";
import Header from "../components/header/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon oliverre.dev</title>
      </Head>
      {/*Header component*/}
      <Header />
    </div>
  );
}
