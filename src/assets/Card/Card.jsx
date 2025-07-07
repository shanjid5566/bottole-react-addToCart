import "./Card.css";
const Card = ({ cart, hanndleRemoveFromCart}) => {
  return (
    <div>
      <h2>Cart : {cart.length}</h2>
      <div className="img">
        {cart.map((bottol) => (
          <div>
            <img src={bottol.img}></img>
            <button onClick={()=>{
                hanndleRemoveFromCart(bottol.id)
            }}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
