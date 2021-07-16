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
  function handleClickProduct(clickedProductName) {
    console.log(clickedProductName);
    const removeName = state.filter(
      (removeItem) => removeItem.Name !== clickedProductName
    );
    setState(removeName);
    return removeName;
  }
  const renderObject = state.map((newItem) => {
    return (
      <>
        <button>Whatsapp?</button>
        <li onClick={() => handleClickProduct(newItem.Name)}>
          {[newItem.Name]}
        </li>
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
