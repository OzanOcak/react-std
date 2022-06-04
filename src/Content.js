import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

export const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "one half pound bag of cacao ",
    },
    {
      id: 2,
      checked: false,
      item: "covered almonds unsalted",
    },
    {
      id: 3,
      checked: false,
      item: "chocolate",
    },
  ]);
  const handleChecked = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };
  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
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
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>the list is empty</p>
      )}
    </main>
  );
};
