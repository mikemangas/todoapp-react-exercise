import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

function Pagetitle({ h1text }) {
  return <h1>todoApp powered by {h1text}</h1>;
}

//product component
function Product({ product, onClickItem, onClickIsBought }) {
  function handleButtonClick(event) {
    event.stopPropagation();
    onClickIsBought(product.name);
  }

  function handleClick() {
    onClickItem(product.name);
  }

  let boughtText;
  let shoppingListItemClass;

  if (product.isBought) {
    shoppingListItemClass = "listClass--itemRed";
    boughtText = "Bought";
  } else {
    boughtText = "Buy";
  }

  return (
    <li className={`listClass ${shoppingListItemClass}`}>
      <p onClick={handleClick}>X</p>
      {product.name}
      <button onClick={handleButtonClick}>{boughtText}</button>
    </li>
  );
}

// main app component

function Main({ name }) {
  const [state, setState] = useState([]);

  //here we say: clickedproduct (because later, handleclickproduct is beeing passed into the onclick props), is not equal to
  function handleClickProduct(clickedProduct) {
    const newProducts = state.filter((produktObject) => {
      return produktObject.name !== clickedProduct;
    });
    setState(newProducts);
    console.log(newProducts);
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
  function Inputform({ className }) {
    return (
      <input
        className={className}
        name="shoppingForm"
        id="shoppingForm"
        type="text"
        required
        placeholder="type in your grocery"
      ></input>
    );
  }

  function Button({ className, buttonText }) {
    return (
      <button className={className} type="submit">
        {buttonText}
      </button>
    );
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

  function Form() {
    return (
      <form onSubmit={handleAddGrocerySubmit} className="headerForm">
        <Inputform className={"new-class-item"} />
        <Button className={"power"} buttonText={"click mich doch"} />
      </form>
    );
  }

  return (
    <div>
      <Pagetitle h1text={"Mike"} />
      <Form />
      <ul>{renderProducts()}</ul>
    </div>
  );
}
