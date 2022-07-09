import { useRouter } from "next/router";
import useFetch from "../../hooks/useFetch";
import { getCoinById } from "../../services/getCoinById";

function Coins() {
  const router = useRouter();
  console.log(router.query)
  const { id } = router.query;

  const [coin, loading, error] = useFetch(getCoinById, id);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;
  console.log(coin)
  return (
    <div>
      <div>
        <img src={coin.image.large} />
      </div>
      <h1>{coin.name}</h1>
      <div>
        price: { coin.tickers[0].last }
      </div>
      <div>
        <p>rank: #{coin.coingecko_rank}</p>
      </div>
    </div>
  );
}

export default Coins;
