import { BASE_URL } from "../env";

export async function getCoins() {
  const response = await fetch(`${BASE_URL}/coins/list`);
  const data = await response.json();
  return data;
}
