import type { NextPage } from "next";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../component/navbar";
import Main from "../component/main";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Agung Firmansyah</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <main className="container-fluid main">
        <Navbar />
        <Main />
      </main>
    </>
  );
};

export default Home;
