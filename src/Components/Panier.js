import React from "react";

const Panier = (props) => {
  const { cart, noItems, decrementItem, incrementItem, total } = props;

  return (
    <div className="panier">
      <div className="valider-panier">Valider mon pannier</div>

      <div className="items-panier">
        {cart.map((item, index) => (
          <div key={item.id} className="line-panier">
            <div>
              <button
                className="plus-minus-button"
                onClick={() => decrementItem(item)}
              >
                -
              </button>
              <span>{noItems[index]}</span>
              <button
                className="plus-minus-button"
                onClick={() => incrementItem(item)}
              >
                +
              </button>
              <span>{item.title}</span>
            </div>
            <span>
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "EUR",
              }).format(item.price * noItems[index])}
            </span>
          </div>
        ))}
      </div>

      <div className="soustotal-panier">
        <div className="line-panier">
          <span>Sous total: </span>
          <span>
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "EUR",
            }).format(total.toFixed(2))}
          </span>
        </div>

        <div className="line-panier">
          <span>Frais de livraison: </span>
          <span>
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "EUR",
            }).format(2.5)}
          </span>
        </div>
      </div>

      <div className="total-panier line-panier">
        <span>Total: </span>
        <span>
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "EUR",
          }).format((total + 2.5).toFixed(2))}
        </span>
      </div>
    </div>
  );
};

export default Panier;
