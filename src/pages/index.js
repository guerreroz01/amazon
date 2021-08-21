import Head from "next/head";
import Banner from "../components/banner/Banner";
import Header from "../components/header/Header";
import ProductFeed from "../components/productFeed/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon oliverre.dev</title>
      </Head>
      {/*Header component*/}
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/*Banner*/}
        <Banner />
        {/*ProductFeed*/}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
    },
  };
}
