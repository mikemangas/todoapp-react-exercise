import "./App.css";
import { useState } from "react";

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
    const addedProduct = [...state, { Name: formInputValue, gekauft: false }];
    setState(addedProduct);
    form.reset();
  }

  function removeProduct(clickedProductName) {
    const removeName = state.filter(
      (removeItem) => removeItem.Name !== clickedProductName
    );
    setState(removeName);
    return removeName;
  }

  function changeStatus(clickedProduct) {
    const changeBoolean = state.map((product) => {
      if (product.Name === clickedProduct) {
        return {
          ...product,
          gekauft: !product.gekauft,
        };
      }
      return product;
    });
    setState(changeBoolean);
    console.log(changeBoolean);
  }

  const renderObject = state.map((newItem) => {
    return (
      <>
        <button onClick={() => changeStatus(newItem.Name)}>Whatsapp?</button>
        <li onClick={() => removeProduct(newItem.Name)}>{[newItem.Name]}</li>
      </>
    );
  });

  return (
    <>
      <h1>Shopping List</h1>
      <form onSubmit={productObject}>
        <input
          required
          name="input"
          id="input"
          type="text"
          placeholder="type an item"
        ></input>
        <button type="submit">Add an Item</button>
      </form>
      <ul>{renderObject}</ul>
    </>
  );
}
