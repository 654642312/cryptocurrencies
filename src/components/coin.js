function Coin({ name, price, imgSrc }) {
  return (
    <div>
      <div>
        <img src={imgSrc}/>
      </div>
      <h2>{name}</h2>

      <p>
        price: <span>${price}</span>
      </p>
    </div>
  );
}

export default Coin;
