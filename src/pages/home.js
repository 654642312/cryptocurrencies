import Head from "next/head";
import CoinContainer from "../components/coinContainer";
import Container from "../components/container";

function Home() {
  return (
    <>
      <Head>
        <title>Cryptocurrencies | Home</title>
      </Head>
      <Container>
        <h1>Home</h1>
        <CoinContainer />
      </Container>
    </>
  );
}

export default Home;
