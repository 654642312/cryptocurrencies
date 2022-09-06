import Link from "next/link";
import Image from "next/image";

function Coin({ id, name, price, imgSrc }) {
  return (
    <div>
      <div>
        <Link href={`coins/${id}`}>
          <Image
            src={imgSrc}
            alt="criptocurrency image"
            height={100}
            width={100}
          />
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
