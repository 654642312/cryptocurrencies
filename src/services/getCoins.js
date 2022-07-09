import { BASE_URL } from "../env";

export async function getCoins() {
  const response = await fetch(`${BASE_URL}/coins/markets?vs_currency=usd`);
  const data = await response.json();
  return data;
}
