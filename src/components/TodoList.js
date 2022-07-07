import React from "react";
import Todo from "./Todo";


const TodoList = ({todos, settodos, settext, isEditItem, setisEditItem,text }) => {
  console.log("TodoList",text)
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo
            isEditItem={isEditItem}
            setisEditItem={setisEditItem}
            settext={settext}
            settodos={settodos}
            todos={todo}
            text={text}
            id={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
