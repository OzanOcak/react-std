import Item from "./Item";

const ItemList = ({ items, handleChecked, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item />
      ))}
    </ul>
  );
};
export default ItemList;
