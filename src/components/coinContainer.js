import useFetch from "../hooks/useFetch";
import { getCoins } from "../services/getCoins";
import Coin from "./coin";

function CoinContainer() {
  const [coins, loading, error] = useFetch(getCoins);

  if (loading === true) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {coins?.map((coin) => (
        <Coin
          key={coin.id}
          name={coin.name}
          price={coin.current_price}
          imgSrc={coin.image}
        />
      ))}
    </div>
  );
}

export default CoinContainer;
