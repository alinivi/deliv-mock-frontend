import React from "react";

const RestaurantInfo = (props) => {
    const {name, description, picture} = props;

    return ( 
    <div className="restaurant-info">
        <div><h1>{name}</h1>
        <p>{description}</p>
        </div>
        <img className="restaurant-info-cover" src={picture} alt={`${name}`} />
    </div>);
}

export default RestaurantInfo;