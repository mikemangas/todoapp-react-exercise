import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

// creating the header

function Header() {
  return (
    <form className="headerForm">
      <input
        className="headerInput"
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
