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

function Main() {
  const [state, setState] = useState([]);

  function productObject(event) {
    event.preventDefault();
    const form = event.target;
    const formInput = form.input;
    const formInputValue = formInput.value;

    const productObject = [
      {
        ...state,
        productName: formInputValue,
        isBought: false,
      },
    ];
    setState(productObject);
  }

  function renderObjects() {
    const listItems = state.map((newProduct) => (
      <Product product={newProduct} />
    ));
    return listItems;
  }

  return (
    <>
      <h1>Shopping List</h1>
      <form onSubmit={productObject}>
        <input
          name="input"
          id="input"
          type="text"
          placeholder="type an item"
        ></input>
        <button type="submit">Add an Item</button>
      </form>
      <ul>{renderObjects}</ul>
    </>
  );
}
