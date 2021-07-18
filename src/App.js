import "./App.css";
import Header from "./Components/Header";
import RestaurantInfo from "./Components/RestaurantInfo";
import Category from "./Components/Category";
import Panier from "./Components/Panier";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [noItems, setNoItems] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchData = async () => {
    const response = await axios.get(
      "https://deliv-mock-backend.herokuapp.com/"
    );
    console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addItem = (itemId) => {
    data.categories.forEach((category) =>
      category.meals.forEach((meal) => {
        if (meal.id === itemId)
          if (cart.includes(meal)) {
            let newNoItems = [...noItems];
            newNoItems[cart.indexOf(meal)]++;
            setNoItems(newNoItems);
            let newTotal = total + parseFloat(meal.price);
            setTotal(newTotal);
          } else {
            const newCart = [...cart, meal];
            setCart(newCart);
            let newNoItems = [...noItems];
            newNoItems.push(1);
            setNoItems(newNoItems);
            let newTotal = total + parseFloat(meal.price);
            setTotal(newTotal);
          }
      })
    );
  };

  const incrementItem = (meal) => {
    let newNoItems = [...noItems];
    newNoItems[cart.indexOf(meal)]++;
    setNoItems(newNoItems);
    let newTotal = total + parseFloat(meal.price);
    setTotal(newTotal);
  };

  const decrementItem = (meal) => {
    let newNoItems = [...noItems];
    let index = cart.indexOf(meal);
    newNoItems[index]--;
    if (newNoItems[index] === 0) {
      cart.splice(index, 1);
      setCart(cart);
      newNoItems.splice(index, 1);
    }
    setNoItems(newNoItems);
    let newTotal = total - parseFloat(meal.price);
    setTotal(newTotal);
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <div>data is loading...</div>
      ) : (
        <div>
          <RestaurantInfo
            name={data.restaurant.name}
            description={data.restaurant.description}
            picture={data.restaurant.picture}
          />
          <div className="main-container">
            <div>
              {data.categories
                .filter((category) => category.meals.length > 0)
                .map((category, index) => (
                  <Category key={index} category={category} addItem={addItem} />
                ))}
            </div>
            {cart.length > 0 && (
              <div>
                <Panier
                  cart={cart}
                  noItems={noItems}
                  decrementItem={decrementItem}
                  incrementItem={incrementItem}
                  total={total}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
