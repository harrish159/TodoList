import React from "react";

const TodoComponent = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <button onClick={() => props.deleteItem(props.obj)}>Delete</button>
    </div>
  );
};

export default TodoComponent;
