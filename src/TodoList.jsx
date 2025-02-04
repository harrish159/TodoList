import React, { useState } from "react";
import TodoComponent from "./TodoComponent";

const TodoList = () => {
  const [todoName, setTodoName] = useState("");
  const [Arr, setArr] = useState([]);

  const handleAdd = () => {
    setArr([...Arr, todoName]); 
    setTodoName("");
    console.log("Added:", todoName);
  };

  const deleteItem = (item) => {
    const newArr = Arr.filter((ArrItem) => ArrItem !== item);
    setArr(newArr);
  };

  return (
    <div>
      <label>Enter Item Name: </label>
      <input
        type="text"
        value={todoName}
        placeholder="Add Item Name"
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      {Arr.map((item, index) => (
        <TodoComponent
          key={index}
          name={item}
          obj={item}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
};

export default TodoList;
