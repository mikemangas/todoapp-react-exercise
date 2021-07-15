//product component
export default function Product({ product, onClickItem, onClickIsBought }) {
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
