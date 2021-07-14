import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Your Shopping List</h1>
      <Header />
      <Body />
    </div>
  );
}

// creating the header
function handleAddGrocerySubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formInput = form.shoppingForm;
  const inputValue = formInput.value;
  console.log(inputValue);
}

function Header() {
  return (
    <form onSubmit={handleAddGrocerySubmit} className="headerForm">
      <input
        className="headerInput"
        name="shoppingForm"
        id="shoppingForm"
        type="text"
        placeholder="type in your grocery"
      ></input>
      <button className="headerButton" type="submit">
        Add a Grocery
      </button>
    </form>
  );
}

//creating the body

function Body() {
  return (
    <ul>
      <li>
        Apple
        <p>X</p>
        <button>Complete</button>
      </li>
      <li>
        Shampoo
        <p>X</p>
        <button>Pending</button>
      </li>
    </ul>
  );
}
