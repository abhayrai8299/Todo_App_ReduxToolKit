import React from "react";
import { useDispatch } from "react-redux";
import {deleteTodo,editTodo} from "../redux/todoSlice"
const Todo = ({todos,id,settext,setisEditItem,text}) => {

  const dispatch=useDispatch();

  const deleteHandler = () => {
    dispatch(deleteTodo({id:id}));
  }

  const editHandler=(item)=>{
    console.log("Sdss",text)
    setisEditItem({status:true,id:item.id})
    settext(item.title)
    console.log("ItemTod:",item.title)
    dispatch(editTodo({item:item}))
  }
  
 console.log("TodoTitle",todos.title,text)
  return (
    <div>
      <li>{todos.title}</li>
      <button onClick={()=>editHandler(todos)} >Edit</button>
      <button onClick={()=>deleteHandler()}>Delete</button>
    </div>
  );
  };

export default Todo;
