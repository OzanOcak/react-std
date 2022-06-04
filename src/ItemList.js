import Item from "./Item";

const ItemList = ({ items, handleChecked, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};
export default ItemList;
