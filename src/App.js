import "./App.css";
import { useState } from "react";

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

  //event onsbumit and get the value of the form.
  function handleAddGrocerySubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formInput = form.shoppingForm;
    const inputValue = formInput.value;

    //concatenate through spread.. the state (which is empty) and the inputvalue - as an array.
    const newProductItems = [...state, inputValue];

    //set to new state the productitem.
    setState(newProductItems);
    form.reset();
    console.log(newProductItems);
  }

  function renderProducts() {
    //state is here the new state and we are getting the date (single product), through mapping. we return the component "Product" we created and pass it the prop name and the vale.
    const listItems = state.map((singleProduct) => {
      return <Product name={singleProduct} />;
    });
    return listItems;
  }
  let fakeh1 = "Your Shopping List";
  return (
    <div>
      <h1>{fakeh1}</h1>
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

//product component
function Product({ name }) {
  return <li>{name}</li>;
}
