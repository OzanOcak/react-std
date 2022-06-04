import { FaTrashAlt } from "react-icons/fa";

const Item = ({ item, handleChecked, handleDelete }) => {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => {
          handleChecked(item.id);
        }}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => {
          handleChecked(item.id);
        }}
      >
        {item.item}
      </label>
      <FaTrashAlt
        role="button"
        tabIndex="0"
        onClick={() => {
          handleDelete(item.id);
        }}
      />
    </li>
  );
};
export default Item;
