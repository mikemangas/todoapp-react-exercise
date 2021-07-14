//product component
export default function Product({ name, onClick }) {
  function handleClick() {
    onClick(name);
  }
  return <li onClick={handleClick}>{name}</li>;
}
