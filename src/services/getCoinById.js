import { BASE_URL } from "../env";

export async function getCoinById(id) {
  const response = await fetch(`${BASE_URL}/coins/${id}`);
  const data = await response.json();
  return data;
}
