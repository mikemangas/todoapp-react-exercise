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
  const [state, setState] = useState([""]);
  function productObject(event) {
    event.preventDefault();
    const form = event.target;
    const formInput = form.input;
    const formInputValue = formInput.value;
    const addedProduct = [...state, formInputValue];
    setState(addedProduct);
    form.reset();
  }

  const blabliblu = state.map((newItem) => {
    return <li>{newItem}</li>;
  });

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
      <ul>{blabliblu}</ul>
    </>
  );
}
