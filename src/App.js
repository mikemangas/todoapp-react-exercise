import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

function Product({ productItem, itemClick, itemChangeStatus }) {
  function handleOnClick() {
    itemClick(productItem.name);
  }

  function changeStatusButton() {
    itemChangeStatus(productItem.name);
  }

  return (
    <li className="list-class">
      {productItem.name}
      <button onClick={handleOnClick}>X</button>
      <button onClick={changeStatusButton}>Buy</button>
    </li>
  );
}

// main app component
function Main() {
  const [state, setState] = useState([]);

  function submitDiv(Event) {
    Event.preventDefault();
    const form = Event.target;
    const input = form.formInput;
    const inputValue = input.value;
    const productObject = [
      ...state,
      {
        status: false,
        name: inputValue,
      },
    ];
    setState(productObject);
    form.reset();
    console.log(productObject);
  }

  function changeStatus(clickedItemButton) {
    const changeItem = state.map((clickedItem) => {
      if (clickedItem.name === clickedItemButton) {
        return {
          ...clickedItem,
          status: !clickedItem.status,
        };
      }
      return changeItem;
    });
    setState(changeItem);
    console.log(changeItem);
  }

  function Div({ h1Title, submitButtonText }) {
    return (
      <div onSubmit={submitDiv}>
        <h1>To do App from {h1Title}</h1>
        <form>
          <input
            id="formInput"
            name="formInput"
            type="text"
            placeholder="your desired product"
            required
          />
          <button type="submit">{submitButtonText}</button>
        </form>
        <ul>{renderProduct()}</ul>
      </div>
    );
  }

  function renderProduct() {
    const renderedObject = state.map((productItem) => {
      return (
        <Product
          productItem={productItem}
          itemClick={removeItem}
          itemChangeStatus={changeStatus}
        />
      );
    });
    return renderedObject;
  }

  function removeItem(clickedProduct) {
    const removeItem = state.filter(
      (clickedItem) => clickedItem.name !== clickedProduct
    );
    setState(removeItem);
    return removeItem;
  }
  return <Div h1Title="Mike" submitButtonText="Click me" />;
}
