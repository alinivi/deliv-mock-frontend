import React from "react";
import Meal from "./Meal";

const Category = (props) => {
    const {category, addItem} = props;
    return (
        <div className="category">
        <h2>{category.name}</h2>
        <div className="meals">{category.meals.map((meal, index) => 
            <Meal key={meal.id} meal={meal} addItem={addItem} />
        )}
        </div>
        </div>
    );
};

export default Category; 