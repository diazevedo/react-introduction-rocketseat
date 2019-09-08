import React from "react";

const TechItem = ({ item, onDelete }) => {
  return (
    <li>
      {item}
      <button className="button-delete-tech" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default TechItem;
