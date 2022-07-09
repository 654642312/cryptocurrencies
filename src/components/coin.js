import Link from "next/link";

function Coin({ id, name, price, imgSrc }) {
  return (
    <div>
      <div>
        <Link href={`coins/${id}`}>
          <img src={imgSrc} />
        </Link>
      </div>
      <h2>{name}</h2>

      <p>
        price: <span>${price}</span>
      </p>
    </div>
  );
}

export default Coin;
