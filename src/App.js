import "./App.css";
import { useState } from "react";
import Product from "./product";

export default function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

// main app component

function Main({ name }) {
  const [state, setState] = useState([]);

  //here we say: clickedproduct (because later, handleclickproduct is beeing passed into the onclick props), is not equal to
  function handleClickProduct(clickedProduct) {
    const newProducts = state.filter((gefilterteProdukte) => {
      return gefilterteProdukte.name !== clickedProduct;
    });
    setState(newProducts);
  }

  //event onsbumit and get the value of the form.
  function handleAddGrocerySubmit(event) {
    event.preventDefault();
    //that event target works because, handlegrocerysubmit function is beeing called in the form.
    const form = event.target;
    const formInput = form.shoppingForm;
    const inputValue = formInput.value;

    //concatenate through spread.. the state (which is empty at first, and then then gets the previous status) and the inputvalue - as an array.
    const newProductItems = [
      ...state,
      {
        name: inputValue,
        isBought: false,
      },
    ];

    //set to new state the productitem.
    setState(newProductItems);
    form.reset();
  }

  function handleClickIsBought(productName) {
    const newProductsIsBought = state.map((productObject) => {
      if (productObject.name === productName) {
        return {
          ...productObject,
          isBought: !productObject.isBought,
        };
      }
      return productObject;
    });

    setState(newProductsIsBought);
    console.log(newProductsIsBought);
  }

  function renderProducts() {
    //state is here the new state and we are getting the date (single product), through mapping. we return the component "Product" we created and pass it the prop name and the vale.
    const listItems = state.map((singleProduct, index) => {
      return (
        <Product
          key={index}
          product={singleProduct}
          onClickItem={handleClickProduct}
          onClickIsBought={handleClickIsBought}
        />
      );
    });
    return listItems;
  }
  let headerTitleH1 = "Your Shopping List";
  return (
    <div>
      <h1>{headerTitleH1}</h1>
      <form onSubmit={handleAddGrocerySubmit} className="headerForm">
        <input
          className="headerInput"
          name="shoppingForm"
          id="shoppingForm"
          type="text"
          required
          placeholder="type in your grocery"
        ></input>
        <button className="headerButton" type="submit">
          Add a Grocery
        </button>
      </form>
      <ul>{renderProducts()}</ul>
    </div>
  );
}
