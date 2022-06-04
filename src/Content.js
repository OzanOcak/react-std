import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = ({ items, handleChecked, handleDelete }) => {
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

export default Content;
