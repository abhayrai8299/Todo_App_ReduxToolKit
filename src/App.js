import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useSelector} from "react-redux";
function App() {
  const [text, settext] = useState("");
 // const [todos, settodos] = useState([]);
  const [isEditItem, setisEditItem] = useState({id:"",status:false});

  const [Item,setItem]=useState(null);
  const todos =useSelector((state)=>state.todoReducer.todos)

  return (
    <div className="App">
      <header>
        <h1>Todo List </h1>
      </header>
      <Form
        isEditItem={isEditItem}
        setisEditItem={setisEditItem}
        todos={todos}
        settodos={todos}
        text={text}
        settext={settext}
      />
      <TodoList
        isEditItem={isEditItem}
        setisEditItem={setisEditItem}
        settext={settext}
        settodos={todos}
        todos={todos}
        Item={Item}
        text={text}
        setItem={setItem}
      />
    </div>
  );
}

export default App;
