import React from "react";
//import placeholder from "../assets/placeholder.png";

const Meal = (props) => {
  const { meal, addItem } = props;
  return (
    <div className="meal" onClick={() => addItem(meal.id)}>
      <div>
        <div>{meal.title}</div>
        <div className="meal-description">{meal.description}</div>
        <div>
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "EUR",
          }).format(meal.price)}
        </div>
        {meal.popular && <div className="meal-populaire"> Populaire</div>}
      </div>
      {meal.picture && <img src={meal.picture} alt={`${meal.title}`} />}
    </div>
  );
};

export default Meal;
